"use client";

import { useState, useMemo } from "react";

type Step = 1 | 2 | 3 | "success";
type Dir  = "forward" | "back";

const MONTHS   = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const WEEKDAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const SLOTS    = ["9:00 AM","10:00 AM","11:00 AM","1:00 PM","2:00 PM","3:00 PM"];
const SERVICES = ["Monthly Bookkeeping","Payroll Management","QuickBooks Setup","Catch-Up Bookkeeping","Not Sure Yet"];

interface F { name:string; business:string; email:string; phone:string; service:string; message:string; }

export default function BookingCalendar() {
  const today = useMemo(() => { const d = new Date(); d.setHours(0,0,0,0); return d; }, []);

  const [step,       setStep]       = useState<Step>(1);
  const [dir,        setDir]        = useState<Dir>("forward");
  const [viewYear,   setViewYear]   = useState(today.getFullYear());
  const [viewMonth,  setViewMonth]  = useState(today.getMonth());
  const [monthKey,   setMonthKey]   = useState(0);
  const [monthDir,   setMonthDir]   = useState<"l"|"r">("l");
  const [selDate,    setSelDate]    = useState<Date|null>(null);
  const [selTime,    setSelTime]    = useState<string|null>(null);
  const [form,       setForm]       = useState<F>({ name:"",business:"",email:"",phone:"",service:"",message:"" });
  const [errors,     setErrors]     = useState<Partial<F>>({});
  const [submitting, setSubmitting] = useState(false);

  /* next 3 available (weekday, non-past) days */
  const popular = useMemo(() => {
    const out: Date[] = [];
    const d = new Date(today);
    while (out.length < 3) {
      d.setDate(d.getDate() + 1);
      const w = d.getDay();
      if (w > 0 && w < 6) out.push(new Date(d));
    }
    return out;
  }, [today]);

  /* calendar grid cells */
  const cells = useMemo(() => {
    const first = new Date(viewYear, viewMonth, 1).getDay();
    const total = new Date(viewYear, viewMonth + 1, 0).getDate();
    const arr: (Date|null)[] = Array(first).fill(null);
    for (let i = 1; i <= total; i++) arr.push(new Date(viewYear, viewMonth, i));
    return arr;
  }, [viewYear, viewMonth]);

  const isAvail   = (d: Date) => d.getDay() > 0 && d.getDay() < 6 && d.getTime() >= today.getTime();
  const isToday_  = (d: Date) => d.getTime() === today.getTime();
  const isSel     = (d: Date) => selDate?.getTime() === d.getTime();
  const isPopular = (d: Date) => popular.some(p => p.getTime() === d.getTime());
  const canPrev   = () => viewYear > today.getFullYear() || viewMonth > today.getMonth();

  const changeMonth = (mv: "prev"|"next") => {
    if (mv === "prev" && !canPrev()) return;
    setMonthDir(mv === "next" ? "l" : "r");
    setMonthKey(k => k + 1);
    if (mv === "next") {
      if (viewMonth === 11) { setViewYear(y => y+1); setViewMonth(0); }
      else setViewMonth(m => m+1);
    } else {
      if (viewMonth === 0) { setViewYear(y => y-1); setViewMonth(11); }
      else setViewMonth(m => m-1);
    }
  };

  const goTo = (next: Step, d: Dir) => { setDir(d); setStep(next); };

  const onDate = (d: Date) => {
    if (!isAvail(d)) return;
    setSelDate(d);
    setTimeout(() => goTo(2, "forward"), 160);
  };

  const onTime = (t: string) => {
    setSelTime(t);
    setTimeout(() => goTo(3, "forward"), 160);
  };

  const fmtDate = (d: Date) =>
    `${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`;

  const validate = (): Partial<F> => {
    const e: Partial<F> = {};
    if (!form.name.trim())     e.name     = "Required";
    if (!form.business.trim()) e.business = "Required";
    if (!form.email.trim())    e.email    = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim())    e.phone    = "Required";
    return e;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    // TODO: Replace simulateSubmit() with real API call or Calendly/TidyCal embed when backend is ready
    await new Promise(r => setTimeout(r, 1200));
    setSubmitting(false);
    setStep("success");
  };

  const reset = () => {
    setDir("forward"); setStep(1);
    setSelDate(null);  setSelTime(null);
    setForm({ name:"",business:"",email:"",phone:"",service:"",message:"" });
    setErrors({});
  };

  const upd = (f: keyof F, v: string) => {
    setForm(p => ({ ...p, [f]: v }));
    if (errors[f]) setErrors(p => ({ ...p, [f]: undefined }));
  };

  const enterCls = dir === "forward" ? "bc-enter-r" : "bc-enter-l";

  /* ── render ── */
  return (
    <div className="bc-wrap">
      <div key={`s${step}`} className={enterCls}>

        {/* ─ STEP 1: CALENDAR ─ */}
        {step === 1 && (
          <div>
            {/* Month nav */}
            <div className="bc-month-hdr">
              <button onClick={() => changeMonth("prev")} disabled={!canPrev()} className="bc-nav" aria-label="Previous month">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <span className="bc-month-lbl">{MONTHS[viewMonth]} {viewYear}</span>
              <button onClick={() => changeMonth("next")} className="bc-nav" aria-label="Next month">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>

            {/* Weekday labels */}
            <div className="bc-wkdays">
              {WEEKDAYS.map(d => <div key={d} className="bc-wkday">{d}</div>)}
            </div>

            {/* Day grid */}
            <div key={monthKey} className={`bc-grid ${monthDir === "l" ? "bc-grid-l" : "bc-grid-r"}`}>
              {cells.map((date, i) => {
                if (!date) return <div key={`e${i}`} />;
                const av = isAvail(date);
                return (
                  <button
                    key={date.getTime()}
                    onClick={() => onDate(date)}
                    disabled={!av}
                    tabIndex={av ? 0 : -1}
                    aria-label={`${fmtDate(date)}${!av ? ", unavailable" : ""}`}
                    className={["bc-day", av ? "bc-day-av" : "bc-day-na",
                      isToday_(date) ? "bc-day-td" : "",
                      isSel(date)    ? "bc-day-sel" : ""].filter(Boolean).join(" ")}
                  >
                    {date.getDate()}
                    {isPopular(date) && !isSel(date) && <span className="bc-dot" />}
                    {isToday_(date)  && !isSel(date) && <span className="bc-td-dot" />}
                  </button>
                );
              })}
            </div>

            <div className="bc-legend"><span className="bc-dot-sm" /> Popular times available</div>
          </div>
        )}

        {/* ─ STEP 2: TIME SLOTS ─ */}
        {step === 2 && selDate && (
          <div>
            <button onClick={() => goTo(1, "back")} className="bc-back">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              Back
            </button>
            <div className="bc-sel-date">{fmtDate(selDate)}</div>
            <p className="bc-time-prompt">Choose a time:</p>
            <div className="bc-time-grid">
              {SLOTS.map(t => (
                <button key={t} onClick={() => onTime(t)}
                  className={`bc-slot${selTime === t ? " bc-slot-sel" : ""}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ─ STEP 3: FORM ─ */}
        {step === 3 && selDate && selTime && (
          <div>
            <button onClick={() => goTo(2, "back")} className="bc-back">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              Back
            </button>
            <div className="bc-summary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8"  y1="2" x2="8"  y2="6"/>
                <line x1="3"  y1="10" x2="21" y2="10"/>
              </svg>
              {fmtDate(selDate)} at {selTime}
            </div>

            <form onSubmit={onSubmit} noValidate className="bc-form">
              <div className="bc-row">
                <div className="bc-fld">
                  <input type="text" placeholder="Full Name *" value={form.name}
                    onChange={e => upd("name", e.target.value)}
                    className={`bc-inp${errors.name ? " bc-inp-err" : ""}`} />
                  {errors.name && <span className="bc-err">{errors.name}</span>}
                </div>
                <div className="bc-fld">
                  <input type="text" placeholder="Business Name *" value={form.business}
                    onChange={e => upd("business", e.target.value)}
                    className={`bc-inp${errors.business ? " bc-inp-err" : ""}`} />
                  {errors.business && <span className="bc-err">{errors.business}</span>}
                </div>
              </div>
              <div className="bc-row">
                <div className="bc-fld">
                  <input type="email" placeholder="Email *" value={form.email}
                    onChange={e => upd("email", e.target.value)}
                    className={`bc-inp${errors.email ? " bc-inp-err" : ""}`} />
                  {errors.email && <span className="bc-err">{errors.email}</span>}
                </div>
                <div className="bc-fld">
                  <input type="tel" placeholder="Phone *" value={form.phone}
                    onChange={e => upd("phone", e.target.value)}
                    className={`bc-inp${errors.phone ? " bc-inp-err" : ""}`} />
                  {errors.phone && <span className="bc-err">{errors.phone}</span>}
                </div>
              </div>
              <select value={form.service} onChange={e => upd("service", e.target.value)}
                className="bc-inp bc-sel">
                <option value="">Service type (optional)</option>
                {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <textarea placeholder="Notes or questions (optional)" rows={3}
                value={form.message} onChange={e => upd("message", e.target.value)}
                className="bc-inp bc-ta" />
              <button type="submit" disabled={submitting} className="bc-submit">
                {submitting ? <span className="bc-spin" /> : "Confirm My Booking"}
              </button>
            </form>
          </div>
        )}

        {/* ─ SUCCESS ─ */}
        {step === "success" && (
          <div className="bc-ok">
            <svg className="bc-chk" viewBox="0 0 52 52" fill="none">
              <circle className="bc-chk-c" cx="26" cy="26" r="25" stroke="#E8A0B4" strokeWidth="2"/>
              <path   className="bc-chk-m" d="M14 26l9 9 16-18" stroke="#E8A0B4" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="bc-ok-h">You&apos;re booked!</h3>
            <p className="bc-ok-sub">
              We&apos;ll send a confirmation to <strong>{form.email}</strong>. Talk soon!
            </p>
            <p className="bc-ok-note">We respond within 1 business day.</p>
            <button onClick={reset} className="bc-reset">Book Another Time</button>
          </div>
        )}

      </div>
    </div>
  );
}
