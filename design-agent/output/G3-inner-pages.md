Here are the designs for the 5 inner pages, adhering to the Rockstar Bookkeeping brand guidelines.

---

### **PAGE: SERVICES**

**Layout Description:**
This page features a clean hero section with a clear headline and intro. Below, a responsive grid showcases four core services. Each service card provides the service name, key benefits as bullet points, a "best for" section, and a distinct call-to-action button, ensuring users can easily understand and inquire about specific offerings.

**TSX Component Code:**

```tsx
// use client is not needed for this component as it's purely presentational
import { CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  description: string[];
  bestFor: string;
  ctaText: string;
  ctaLink: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, bestFor, ctaText, ctaLink }) => (
  <div className="bg-surface p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
    <h3 className="font-sora text-2xl font-semibold text-text-primary mb-4">{name}</h3>
    <ul className="list-none space-y-2 mb-6 flex-grow">
      {description.map((point, index) => (
        <li key={index} className="flex items-start text-text-secondary font-inter">
          <CheckCircle2 className="h-5 w-5 text-primary-light mr-3 mt-1 flex-shrink-0" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
    <div className="bg-white p-4 rounded-lg border border-border mb-6">
      <p className="font-inter text-text-secondary text-sm">
        <strong className="font-inter font-medium text-text-primary">Best For:</strong> {bestFor}
      </p>
    </div>
    <a
      href={ctaLink}
      className="mt-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-inter font-medium rounded-full shadow-sm text-white bg-primary-light hover:bg-[#1f4e7c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light transition-colors duration-200"
    >
      {ctaText}
    </a>
  </div>
);

export default function ServicesPage() {
  const services = [
    {
      name: 'Monthly Bookkeeping',
      description: [
        'Accurate categorization of all transactions.',
        'Monthly financial statements (P&L, Balance Sheet).',
        'Bank and credit card reconciliations.',
        'Dedicated support and regular check-ins.',
        'Cloud-based access to your financial data.',
      ],
      bestFor: 'Small businesses seeking ongoing, proactive financial management.',
      ctaText: 'Book a Call About This Service',
      ctaLink: '/contact?service=monthly-bookkeeping',
    },
    {
      name: 'Payroll Management',
      description: [
        'Timely and accurate payroll processing.',
        'Direct deposit for employees.',
        'Tax filing and compliance (federal & state).',
        'New hire reporting.',
        'Year-end tax forms (W-2s, 1099s).',
      ],
      bestFor: 'Businesses with employees needing reliable and compliant payroll services.',
      ctaText: 'Book a Call About This Service',
      ctaLink: '/contact?service=payroll-management',
    },
    {
      name: 'QuickBooks Setup',
      description: [
        'Customized QuickBooks Online setup.',
        'Chart of accounts configuration.',
        'Integration with other business tools.',
        'Initial data import and cleanup.',
        'Personalized training and ongoing support.',
      ],
      bestFor: 'New businesses or those transitioning to QuickBooks Online for better organization.',
      ctaText: 'Book a Call About This Service',
      ctaLink: '/contact?service=quickbooks-setup',
    },
    {
      name: 'Catch-Up Bookkeeping',
      description: [
        'Organize and categorize past transactions.',
        'Reconcile bank accounts for previous periods.',
        'Generate accurate historical financial reports.',
        'Prepare for tax season with clean books.',
        'Lay the foundation for ongoing bookkeeping.',
      ],
      bestFor: 'Businesses with overdue or disorganized financial records needing a fresh start.',
      ctaText: 'Book a Call About This Service',
      ctaLink: '/contact?service=catch-up-bookkeeping',
    },
  ];

  return (
    <div className="bg-background text-text-primary">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-surface">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="font-sora text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-text-primary">
            Our Premium Bookkeeping Services
          </h1>
          <p className="font-inter text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Rockstar Bookkeeping offers tailored financial solutions designed to empower your business. From daily transactions to strategic insights, we've got your numbers covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
```

---

### **PAGE: ABOUT**

**Layout Description:**
The About page opens with a warm, personal hero section introducing the founder, featuring a large photo and a narrative. This is followed by a clear display of credentials. A dedicated section highlights the company's core values with icons and brief descriptions, culminating in a direct call-to-action to encourage collaboration.

**TSX Component Code:**

```tsx
// use client is not needed for this component as it's purely presentational
import { CheckCircle2, MessageSquare, Heart } from 'lucide-react';

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-surface p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
    <div className="bg-white p-4 rounded-full inline-flex items-center justify-center mb-4 border border-border">
      <Icon className="h-8 w-8 text-accent-light" />
    </div>
    <h3 className="font-sora text-xl font-semibold text-text-primary mb-3">{title}</h3>
    <p className="font-inter text-text-secondary">{description}</p>
  </div>
);

export default function AboutPage() {
  const ownerName = 'Jane Doe'; // Placeholder for owner's name

  return (
    <div className="bg-background text-text-primary">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-surface">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              {/* Founder Photo Placeholder */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-primary-light to-primary rounded-full overflow-hidden shadow-lg flex items-center justify-center text-white font-sora text-3xl">
                {/* Replace with actual image */}
                <span className="sr-only">Founder Photo</span>
                JD
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="font-sora text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-text-primary">
                Hi, I am {ownerName}
              </h1>
              <p className="font-inter text-lg text-text-secondary mb-6">
                As the founder of Rockstar Bookkeeping, I believe that every entrepreneur deserves clear, accurate, and actionable financial insights. My journey began with a passion for helping small businesses thrive, realizing that many struggle with the complexities of bookkeeping. I've dedicated my career to simplifying these processes, allowing business owners like you to focus on what you do best: rocking your business.
              </p>
              <p className="font-inter text-lg text-text-secondary">
                With a commitment to integrity and a personalized approach, I ensure your books are not just balanced, but truly work for you. Let's build a solid financial foundation together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-sora text-3xl font-bold mb-8 text-text-primary">Our Credentials</h2>
          <div className="bg-surface p-8 rounded-xl shadow-md">
            <p className="font-inter text-lg text-text-secondary mb-4">
              <strong className="font-inter font-semibold text-text-primary">QuickBooks ProAdvisor Elite:</strong> Certified expert in QuickBooks Online, ensuring best practices and efficient setups.
            </p>
            <p className="font-inter text-lg text-text-secondary">
              <strong className="font-inter font-semibold text-text-primary">15+ Years Experience:</strong> A proven track record of empowering small businesses with precise and insightful financial management.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={CheckCircle2}
              title="Accurate"
              description="Precision in every number, ensuring your financial data is always reliable and flawless."
            />
            <ValueCard
              icon={MessageSquare}
              title="Responsive"
              description="Always here to answer your questions and provide timely support when you need it most."
            />
            <ValueCard
              icon={Heart}
              title="Personal"
              description="A tailored approach to your unique business needs, treating your success as our own."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-light to-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-sora text-3xl md:text-4xl font-bold mb-6">Ready to Rock Your Numbers?</h2>
          <p className="font-inter text-xl mb-8 opacity-90">
            Let's discuss how Rockstar Bookkeeping can bring clarity and control to your financial world.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-inter font-medium rounded-full shadow-lg text-primary bg-accent hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200"
          >
            Let Us Work Together
          </a>
        </div>
      </section>
    </div>
  );
}
```

---

### **PAGE: HOW IT WORKS**

**Layout Description:**
This page clearly outlines the client journey through a three-step process. Each step features a large, distinct number, an icon, a headline, and detailed explanations of both the client's experience and Rockstar Bookkeeping's responsibilities. Following the process, a comprehensive FAQ section uses an accordion to provide quick answers to common questions, maintaining a clean and informative layout.

**TSX Component Code:**

```tsx
'use client'; // Required for Accordion component state

import { MousePointer2, FileText, ChartLine, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

interface StepCardProps {
  stepNumber: number;
  icon: React.ElementType;
  headline: string;
  clientExperience: string;
  whatWeHandle: string;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, icon: Icon, headline, clientExperience, whatWeHandle }) => (
  <div className="bg-surface p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6">
    <div className="flex-shrink-0 flex flex-col items-center md:items-start">
      <span className="font-sora text-6xl font-extrabold text-primary-light mb-2">{stepNumber}</span>
      <div className="bg-white p-4 rounded-full border border-border">
        <Icon className="h-8 w-8 text-accent" />
      </div>
    </div>
    <div className="text-center md:text-left">
      <h3 className="font-sora text-3xl font-bold text-text-primary mb-4 mt-4 md:mt-0">{headline}</h3>
      <div className="space-y-4 font-inter text-text-secondary">
        <div>
          <strong className="font-inter font-semibold text-text-primary">Your Experience:</strong> {clientExperience}
        </div>
        <div>
          <strong className="font-inter font-semibold text-text-primary">What We Handle:</strong> {whatWeHandle}
        </div>
      </div>
    </div>
  </div>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-sora text-lg font-medium text-text-primary hover:text-primary-light transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        <ChevronDown className={`h-6 w-6 text-primary-light transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-4 font-inter text-text-secondary pr-6">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function HowItWorksPage() {
  const processSteps = [
    {
      stepNumber: 1,
      icon: MousePointer2,
      headline: 'Discovery & Onboarding',
      clientExperience: 'You share your business goals, current financial situation, and what you hope to achieve. We discuss your specific needs and tailor a plan.',
      whatWeHandle: 'We conduct a thorough assessment, recommend the best services, and seamlessly onboard you to our systems, including QuickBooks setup if needed.',
    },
    {
      stepNumber: 2,
      icon: FileText,
      headline: 'Ongoing Bookkeeping & Management',
      clientExperience: 'You provide access to necessary financial accounts. We handle the rest, allowing you to focus on your core business operations.',
      whatWeHandle: 'We meticulously categorize transactions, reconcile accounts, generate monthly reports, manage payroll, and ensure compliance with all regulations.',
    },
    {
      stepNumber: 3,
      icon: ChartLine,
      headline: 'Review & Strategic Insights',
      clientExperience: 'You receive clear, easy-to-understand financial reports and engage in regular discussions to review your performance.',
      whatWeHandle: 'We provide insightful analysis of your financial health, identify trends, and offer recommendations to help you make informed business decisions and achieve growth.',
    },
  ];

  const faqs = [
    {
      question: 'What software do you use for bookkeeping?',
      answer: 'We primarily use QuickBooks Online, as it offers robust features, cloud accessibility, and seamless integration with many business tools. We are certified QuickBooks ProAdvisors.',
    },
    {
      question: 'How often will we communicate?',
      answer: 'We typically schedule monthly check-ins to review your financial statements and discuss any questions. However, we are always available via email or phone for urgent matters.',
    },
    {
      question: 'Is my financial data secure with Rockstar Bookkeeping?',
      answer: 'Absolutely. We utilize industry-leading security protocols and encrypted cloud platforms to ensure your data is always protected and confidential.',
    },
    {
      question: 'What if my books are currently a mess?',
      answer: 'No problem at all! Our Catch-Up Bookkeeping service is designed specifically for this. We\'ll organize your past transactions, reconcile accounts, and bring your books up to date.',
    },
    {
      question: 'How do your fees work?',
      answer: 'Our fees are transparent and typically structured as fixed monthly packages, ensuring no surprises. Pricing depends on the complexity and volume of your transactions. We\'ll discuss a custom quote during our discovery call.',
    },
  ];

  return (
    <div className="bg-background text-text-primary">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-surface">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-sora text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-text-primary">
            How Rockstar Bookkeeping Works
          </h1>
          <p className="font-inter text-lg md:text-xl text-text-secondary">
            We've streamlined our process to be simple, efficient, and transparent, so you always know what to expect and can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-xl shadow-lg border border-border divide-y divide-border">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
```

---

### **PAGE: TESTIMONIALS**

**Layout Description:**
The Testimonials page prominently features a placeholder for a video testimonial at the top to immediately capture attention. Below, a responsive grid displays multiple client testimonials. Each card includes a star rating, a compelling quote, the client's first name, and their business type, collectively building strong social proof for Rockstar Bookkeeping.

**TSX Component Code:**

```tsx
// use client is not needed for this component as it's purely presentational
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  rating: number;
  quote: string;
  name: string;
  businessType: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ rating, quote, name, businessType }) => (
  <div className="bg-surface p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-accent' : 'text-border'}`}
          fill={i < rating ? '#f59e0b' : 'none'}
          strokeWidth={1}
        />
      ))}
    </div>
    <p className="font-inter text-text-primary text-lg italic mb-6 flex-grow">"{quote}"</p>
    <div className="pt-4 border-t border-border">
      <p className="font-sora text-lg font-semibold text-text-primary mb-1">{name}</p>
      <p className="font-inter text-sm text-text-secondary">{businessType}</p>
    </div>
  </div>
);

export default function TestimonialsPage() {
  const testimonials = [
    {
      rating: 5,
      quote: 'Rockstar Bookkeeping has completely transformed our financial clarity. Their attention to detail and proactive communication is exceptional. We finally understand our numbers!',
      name: 'Sarah P.',
      businessType: 'E-commerce Business Owner',
    },
    {
      rating: 5,
      quote: 'Payroll used to be a headache, but now it\'s seamless. Rockstar Bookkeeping handles everything, allowing us to focus on our team and clients.',
      name: 'Mark T.',
      businessType: 'Restaurant Owner',
    },
    {
      rating: 5,
      quote: 'I was drowning in receipts and spreadsheets. They caught us up and set up QuickBooks perfectly. Best investment for my business!',
      name: 'Jessica L.',
      businessType: 'Freelance Designer',
    },
    {
      rating: 5,
      quote: 'Their monthly reports are invaluable. I can see exactly where my money is going and make informed decisions. Highly recommend!',
      name: 'David R.',
      businessType: 'Marketing Agency CEO',
    },
    {
      rating: 5,
      quote: 'Professional, trustworthy, and incredibly efficient. Rockstar Bookkeeping is an essential partner for our growing startup.',
      name: 'Emily W.',
      businessType: 'Tech Startup Founder',
    },
    {
      rating: 5,
      quote: 'From messy books to perfectly organized finances. The peace of mind alone is worth every penny. Thank you!',
      name: 'Chris M.',
      businessType: 'Contractor',
    },
    {
      rating: 5,
      quote: 'They made the transition to QuickBooks so easy. The training was clear, and their ongoing support is fantastic.',
      name: 'Olivia K.',
      businessType: 'Retail Boutique Owner',
    },
    {
      rating: 5,
      quote: 'Finally, a bookkeeping service that truly understands small businesses. Their personalized approach is a game-changer.',
      name: 'Michael B.',
      businessType: 'Consulting Firm Partner',
    },
  ];

  return (
    <div className="bg-background text-text-primary">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-surface">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-sora text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-text-primary">
            Hear From Our Happy Clients
          </h1>
          <p className="font-inter text-lg md:text-xl text-text-secondary">
            Our clients' success stories are the heart of what we do. See how Rockstar Bookkeeping helps businesses thrive.
          </p>
        </div>
      </section>

      {/* Featured Video Testimonial */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-sora text-3xl md:text-4xl font-bold mb-10 text-text-primary">
            Featured Client Story
          </h2>
          <div className="relative w-full aspect-video bg-dark-bg rounded-xl shadow-lg overflow-hidden flex items-center justify-center text-white text-xl font-inter">
            {/* Placeholder for embedded video, e.g., YouTube/Vimeo iframe */}
            <span className="opacity-70">Video Testimonial Placeholder</span>
          