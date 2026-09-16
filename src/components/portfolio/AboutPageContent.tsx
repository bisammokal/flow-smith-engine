import { Brain, ShieldCheck, TrendingUp, Headphones } from 'lucide-react';
import { existing } from '@/data/portfolio';
import './about-page.css';

const capabilities = [
  'Operations Automation',
  'Sales & CRM Automation',
  'E-Commerce Automation',
  'AI Assistants & Conversational AI',
  'Voice AI & Agent Automations',
  'Custom Integrations & API Pipelines',
  'Automated Reporting & Analytics',
];

const strengths = [
  { icon: Brain, title: 'Deep Automation Expertise', description: 'Years of experience building enterprise-grade automation systems.' },
  { icon: TrendingUp, title: 'Revenue-Focused Workflow Design', description: 'Every automation I design focuses on improving your bottom line.' },
  { icon: ShieldCheck, title: 'Enterprise-Grade Reliability', description: '99.9% uptime with proactive monitoring and alerts.' },
  { icon: Headphones, title: 'Proactive Monitoring & Support', description: '24/7 system monitoring with proactive support.' },
];

const vision = [
  'To redefine how the world works by building intelligent systems that let businesses scale beyond human limits — where growth becomes automated, decisions become predictive, and operations run themselves.',
  'To empower companies to operate at a level of speed and clarity that only AI can deliver — replacing complexity with precision and chaos with control.',
  'To create a future where every business functions like a self-driving enterprise — always optimizing, always learning, always growing.',
];

export function AboutPageContent() {
  return (
    <div className="p-about-page p-container">
      <header className="p-about-page-hero">
        <h1>I Build AI Systems That Help Businesses Scale — Without Hiring More People.</h1>
        <p>I’m an AI Automation Engineer helping businesses replace manual work with intelligent workflows that increase revenue, eliminate workload, and unlock effortless scale.</p>
      </header>

      <section className="p-about-page-section" aria-labelledby="my-mission">
        <h2 id="my-mission">My Mission</h2>
        <div className="p-about-page-card p-mission-card">
          <p>To design intelligent systems that simplify work, amplify performance, and unlock effortless scale.</p>
          <p>I create automation that feels seamless, invisible, and powerful — allowing founders to focus on vision, while their business runs itself.</p>
        </div>
      </section>

      <section className="p-about-page-section" aria-labelledby="what-i-do">
        <h2 id="what-i-do">What I Do</h2>
        <p className="p-about-page-intro">I design, build, and maintain end-to-end automation systems across:</p>
        <div className="p-about-capabilities">
          {capabilities.map(capability => (
            <div className="p-about-page-card p-capability-card" key={capability}>{capability}</div>
          ))}
        </div>
      </section>

      <section className="p-about-page-section" aria-labelledby="why-choose-me">
        <h2 id="why-choose-me">Why Clients Choose Me</h2>
        <div className="p-about-strengths">
          {strengths.map(({ icon: Icon, title, description }) => (
            <div className="p-about-page-card p-strength-card" key={title}>
              <Icon size={25} aria-hidden="true" />
              <div><h3>{title}</h3><p>{description}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-about-page-section" aria-labelledby="my-vision">
        <h2 id="my-vision">My Vision</h2>
        <div className="p-about-vision">
          {vision.map(paragraph => <div className="p-about-page-card p-vision-card" key={paragraph}><p>{paragraph}</p></div>)}
        </div>
      </section>

      <section className="p-about-page-section" aria-labelledby="my-impact">
        <h2 id="my-impact">My Impact</h2>
        <div className="p-about-impact">
          {existing.businessStats.map(stat => (
            <div className="p-about-page-card p-impact-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <p>{stat.label.replace('Countries We Serve', 'Countries I Serve')}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
