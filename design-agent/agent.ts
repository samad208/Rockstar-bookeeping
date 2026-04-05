#!/usr/bin/env npx tsx
/**
 * Rockstar Bookkeeping — Gemini Design Agent
 *
 * Modes:
 *   Interactive chat:
 *     npx tsx design-agent/agent.ts
 *
 *   Single task (prints to stdout):
 *     npx tsx design-agent/agent.ts --task "design a hero section"
 *
 *   Single task + save output:
 *     npx tsx design-agent/agent.ts --task "generate color palette" --output palette.md
 *
 * In interactive mode special commands:
 *   save <filename>   — save last response to design-agent/output/<filename>
 *   clear             — clear conversation history
 *   exit / quit       — end session
 */

import { GoogleGenAI } from "@google/genai";
import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

// ---------------------------------------------------------------------------
// Load .env.local
// ---------------------------------------------------------------------------
const envPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const eqIdx = line.indexOf("=");
    if (eqIdx === -1) continue;
    const key = line.slice(0, eqIdx).trim();
    const val = line.slice(eqIdx + 1).trim();
    if (key) process.env[key] = val;
  }
}

const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
if (!apiKey) {
  console.error("❌  GOOGLE_GEMINI_API_KEY not found in .env.local");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Gemini client
// ---------------------------------------------------------------------------
const ai = new GoogleGenAI({ apiKey });
const MODEL = "gemini-2.5-flash";

// ---------------------------------------------------------------------------
// System prompt — brand context injected into every call
// ---------------------------------------------------------------------------
const SYSTEM_PROMPT = `
You are an expert UI/UX design agent for "Rockstar Bookkeeping", a premium professional accounting and bookkeeping services company targeting small business owners and entrepreneurs.

## Brand Identity
- Name: Rockstar Bookkeeping
- Tagline: "We handle the numbers. You rock the business."
- Voice: Professional, confident, approachable, trustworthy

## Color Palette
- Primary (Navy):     #1a3c5e  — trust, depth, professionalism
- Primary Light:      #2563a8  — energy, confidence
- Accent (Gold):      #f59e0b  — premium, success, warmth
- Accent Light:       #fbbf24
- Background:         #ffffff  — clean
- Surface:            #f8fafc  — subtle off-white
- Text Primary:       #0f172a
- Text Secondary:     #475569
- Border:             #e2e8f0
- Dark BG (footer):   #0f172a

## Typography
- Headings: "Sora" (Google Font) — weights 600, 700, 800
- Body:     "Inter" (Google Font) — weights 400, 500, 600

## Design Style
- Clean, minimal, lots of white space
- Subtle gradients (navy→blue, white→slate-50)
- Rounded corners: 8px cards, 12px larger cards, 9999px pills/buttons
- Shadows: soft (shadow-md, shadow-lg) — never harsh
- Animations: subtle fade-in-up, smooth hover transitions (200-300ms)
- No clutter. Every element must earn its place.
- Mobile-first, fully responsive

## Tech Stack
- Next.js 15+ (App Router, Server Components by default, "use client" only when needed)
- Tailwind CSS v4
- lucide-react for icons
- TypeScript

## Output Rules
When designing a section or component:
1. Briefly describe the layout and visual intent (2-4 sentences)
2. Output the complete, production-ready TSX component code
3. Use Tailwind classes — no inline styles unless absolutely necessary
4. Include hover states, focus states, and responsive breakpoints
5. Add "use client" only if the component needs state or browser APIs
6. Keep imports minimal — only what's used

When asked for design decisions (colors, spacing, fonts), be specific with exact values.
`.trim();

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type Message = { role: "user" | "model"; parts: Array<{ text: string }> };

// ---------------------------------------------------------------------------
// Core: send a message with history
// ---------------------------------------------------------------------------
async function send(history: Message[], userText: string): Promise<string> {
  const contents: Message[] = [
    ...history,
    { role: "user", parts: [{ text: userText }] },
  ];

  const result = await ai.models.generateContent({
    model: MODEL,
    contents,
    config: {
      systemInstruction: SYSTEM_PROMPT,
      temperature: 0.7,
      maxOutputTokens: 8192,
    },
  });

  return result.text ?? "";
}

// ---------------------------------------------------------------------------
// Save helper
// ---------------------------------------------------------------------------
function saveOutput(filename: string, content: string) {
  const dir = path.join(process.cwd(), "design-agent", "output");
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, filename);
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`\n💾  Saved → design-agent/output/${filename}\n`);
}

// ---------------------------------------------------------------------------
// Banner
// ---------------------------------------------------------------------------
function printBanner() {
  console.log(`
╔══════════════════════════════════════════════════════╗
║   🎸  Rockstar Bookkeeping — Gemini Design Agent     ║
║        Powered by Google Gemini 2.0 Flash            ║
╚══════════════════════════════════════════════════════╝

  Ask for: sections, components, color palettes, layouts,
           animations, responsive designs, Tailwind code...

  Commands:
    save <file.tsx>   Save last response to design-agent/output/
    clear             Clear conversation history
    exit              End session
`);
}

// ---------------------------------------------------------------------------
// Interactive REPL mode
// ---------------------------------------------------------------------------
async function runInteractive() {
  printBanner();

  const history: Message[] = [];
  let lastResponse = "";

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
  });

  const prompt = () => rl.question("\x1b[36mYou:\x1b[0m ", async (raw) => {
    const input = raw.trim();
    if (!input) return prompt();

    // --- built-in commands ---
    if (input.toLowerCase() === "exit" || input.toLowerCase() === "quit") {
      console.log("\n✅  Design session ended. Happy building!\n");
      rl.close();
      return;
    }

    if (input.toLowerCase() === "clear") {
      history.length = 0;
      console.log("\n🗑️   History cleared.\n");
      return prompt();
    }

    if (input.toLowerCase().startsWith("save ")) {
      const filename = input.slice(5).trim();
      if (!filename) {
        console.log("⚠️   Usage: save <filename>\n");
      } else if (!lastResponse) {
        console.log("⚠️   Nothing to save yet.\n");
      } else {
        saveOutput(filename, lastResponse);
      }
      return prompt();
    }

    // --- Gemini call ---
    try {
      process.stdout.write("\n\x1b[33mDesign Agent:\x1b[0m\n");
      const response = await send(history, input);
      lastResponse = response;
      console.log(response + "\n");

      history.push({ role: "user",  parts: [{ text: input }] });
      history.push({ role: "model", parts: [{ text: response }] });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`\n\x1b[31m❌  Error:\x1b[0m ${msg}\n`);
    }

    prompt();
  });

  rl.on("close", () => process.exit(0));
}

// ---------------------------------------------------------------------------
// Single-task mode  (--task "..." [--output file])
// ---------------------------------------------------------------------------
async function runTask(task: string, output?: string) {
  console.log(`\n🎸  Rockstar Bookkeeping — Gemini Design Agent`);
  console.log(`${"─".repeat(54)}`);
  console.log(`Task: ${task}\n`);

  const response = await send([], task);
  console.log(response);

  if (output) saveOutput(output, response);
}

// ---------------------------------------------------------------------------
// Entrypoint
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
const taskIdx = args.indexOf("--task");
const outputIdx = args.indexOf("--output");
const taskArg  = taskIdx  !== -1 ? args[taskIdx + 1]  : null;
const outputArg = outputIdx !== -1 ? args[outputIdx + 1] : undefined;

if (taskArg) {
  runTask(taskArg, outputArg).catch((e) => { console.error(e); process.exit(1); });
} else {
  runInteractive().catch((e) => { console.error(e); process.exit(1); });
}
