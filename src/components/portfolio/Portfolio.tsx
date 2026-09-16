import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Code2, ExternalLink, Mail, Menu, Moon, Network, Send, Sun, Workflow, X, Bot, Braces, Layers } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { identity, projects, services, tools, existing } from '@/data/portfolio';
import { AboutPageContent } from './AboutPageContent';
import { ServicesPageContent } from './ServicesPageContent';
import { AssistantProjectCard, AssistantProjectDetail } from './AssistantProjectPreview';
import { VisualProjectCard, VisualProjectDetail } from './VisualProject';
import '@/components/portfolio/portfolio.css';
function Reveal({ children, className = '' }: {
    children: ReactNode;
    className?: string;
}) {
    const reduced = useReducedMotion();
    return <motion.div className={className} initial={false} whileInView={reduced ? undefined : { opacity: [0.5, 1], y: [16, 0] }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.5 }}>{children}</motion.div>;
}
function Navigation() {
    const [open, setOpen] = useState(false);
    const [light, setLight] = useState(() => { try {
        return localStorage.getItem('portfolio-theme') === 'light';
    }
    catch {
        return false;
    } });
    const location = useLocation();
    const toggleRef = useRef<HTMLButtonElement>(null);
    const navRef = useRef<HTMLElement>(null);
    useEffect(() => { document.documentElement.dataset.portfolioTheme = light ? 'light' : 'dark'; try {
        localStorage.setItem('portfolio-theme', light ? 'light' : 'dark');
    }
    catch { /* Theme still works without storage. */ } }, [light]);
    useEffect(() => { setOpen(false); }, [location]);
    useEffect(() => {
        if (!open)
            return;
        const handleKey = (event: KeyboardEvent) => { if (event.key === 'Escape') {
            setOpen(false);
            toggleRef.current?.focus();
        } };
        const handleOutside = (event: PointerEvent) => { if (!navRef.current?.contains(event.target as Node))
            setOpen(false); };
        document.addEventListener('keydown', handleKey);
        document.addEventListener('pointerdown', handleOutside);
        return () => { document.removeEventListener('keydown', handleKey); document.removeEventListener('pointerdown', handleOutside); };
    }, [open]);
    return <header className="p-nav-wrap"><nav className="p-nav" aria-label="Main navigation" ref={navRef}>
    <Link to="/" className="p-brand" aria-label="Bisam Ali portfolio home"><span className="p-brand-icon"><Braces size={19}/></span><span>{identity.shortName}</span></Link>
    <div className="p-nav-actions"><button className="p-icon-button" onClick={() => setLight(!light)} aria-label={`Switch to ${light ? 'dark' : 'light'} theme`}>{light ? <Moon size={18}/> : <Sun size={18}/>}</button><button ref={toggleRef} className="p-icon-button p-menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="portfolio-navigation" onClick={() => setOpen(!open)}>{open ? <X size={20}/> : <Menu size={20}/>}</button></div>
    <div className={`p-nav-links ${open ? 'is-open' : ''}`} id="portfolio-navigation">
      {[['About', '/about'], ['Services', '/services'], ['Projects', '/projects']].map(([label, href]) => <Link key={label} to={href} aria-current={location.pathname === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      <a className="p-nav-hire" href={identity.upwork} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Hire me on Upwork <ArrowUpRight size={17} aria-hidden="true" /></a>
    </div>
  </nav></header>;
}
function Footer() { return <footer className="p-footer"><div className="p-container p-footer-inner"><p>© {new Date().getFullYear()} {identity.name}</p><div><a href={identity.upwork} target="_blank" rel="noreferrer">Upwork <ArrowUpRight size={13}/></a></div></div></footer>; }
function Shell({ children, title = 'AI & Automation Portfolio' }: {
    children: ReactNode;
    title?: string;
}) {
    const location = useLocation();
    useEffect(() => {
        document.title = `${title} | ${identity.name}`;
        if (location.hash) {
            const target = document.getElementById(location.hash.slice(1));
            target?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
        }
    }, [location, title]);
    return <div className="portfolio"><a href="#main" className="p-skip">Skip to content</a><Navigation /><main id="main">{children}</main><Footer /></div>;
}
function Heading({ eyebrow, title, description, level = 'h2' }: {
    eyebrow: string;
    title: string;
    description?: string;
    level?: 'h1' | 'h2';
}) { const Title = level; return <div className="p-heading"><p className="p-eyebrow">{eyebrow}</p><Title>{title}</Title>{description && <p className="p-section-description">{description}</p>}</div>; }
function ButtonLink({ to, children, secondary = false }: {
    to: string;
    children: ReactNode;
    secondary?: boolean;
}) { return <Link className={`p-button ${secondary ? 'p-button-secondary' : ''}`} to={to}>{children}<ArrowUpRight size={17}/></Link>; }
function Hero() {
    return <section className="p-hero"><div className="p-hero-dots" aria-hidden="true"/><div className="p-container">
    <Reveal className="p-hero-copy">
      <p className="p-eyebrow"><span className="p-status"/> AI AUTOMATION · BUILT FOR REAL BUSINESS</p>
      <h1>{identity.name}<span>.</span></h1>
      <p className="p-hero-role">AI & Automation Engineer</p>
      <p className="p-hero-description">I build AI-powered systems that <strong>connect your tools, automate operations,</strong><br className="p-desktop-break"/> and eliminate the repetitive work slowing your business down.</p>
      <p className="p-hero-promise"><strong>Built to work. Built to scale. Built to last.</strong></p>
      <div className="p-button-row">
        <ButtonLink to="/#projects">VIEW MY WORK</ButtonLink>
        <a className="p-button p-button-secondary" href={identity.upwork} target="_blank" rel="noopener noreferrer">HIRE ME ON UPWORK <ArrowUpRight size={17}/></a>
      </div>
      <a className="p-scroll-cue" href="#projects">A look inside my work <ArrowDown size={14}/></a>
    </Reveal>
  </div></section>;
}
function AboutSection({ full = false }: {
    full?: boolean;
}) { return <section id="about" className="p-section p-container"><Reveal><Heading level={full ? 'h1' : 'h2'} eyebrow="A little about me" title="I build the systems behind the work."/></Reveal><Reveal className="p-about-grid"><div className="p-about-mark" aria-hidden="true"><span className="p-orbit p-orbit-one"/><span className="p-orbit p-orbit-two"/><span className="p-about-symbol"><Network size={62} strokeWidth={1.2}/></span><span className="p-orbit-label">MAKE WORK FLOW.</span></div><div className="p-about-text"><p>My work spans revenue operations, personal assistants, lead generation, knowledge-based chatbots and content publishing. I take complex, repetitive processes and turn them into connected systems that are easier to run.</p><p>From the first workflow map to the final integration, I focus on practical solutions: clear logic, useful AI and less manual work.</p><Link className="p-text-link" to="/about">More about my approach <ArrowRight size={17}/></Link></div></Reveal><div className="p-domains"><span>Built for real-world operations</span><p>B2B SaaS <i>✳</i> Solo founders <i>✳</i> Sales & lead generation <i>✳</i> Content & commerce</p></div></section>; }
const serviceIcons = [Workflow, Bot, Layers, Code2];
function ServicesSection({ full = false }: {
    full?: boolean;
}) { return <section id="services" className="p-section p-container"><Reveal><Heading level={full ? 'h1' : 'h2'} eyebrow="Services & capabilities" title="What I can help you build." description="From one repetitive task to an entire connected operation."/></Reveal><div className="p-service-grid">{services.map((service, i) => { const Icon = serviceIcons[i]; return <Reveal key={service.title}><details className="p-service" open><summary><span className="p-service-icon"><Icon size={24}/></span><h3>{service.title}</h3><ChevronDown size={18}/></summary><div className="p-service-body"><p>{service.description}</p><ul>{service.points.map(point => <li key={point}><Check size={15}/>{point}</li>)}</ul></div></details></Reveal>; })}</div>{!full && <div className="p-center"><Link className="p-text-link" to="/services">Explore my capabilities <ArrowRight size={17}/></Link></div>}</section>; }
function SkillsSection() { return <section id="skills" className="p-section p-container"><Reveal><Heading eyebrow="The right tools for the job" title="My everyday toolkit." description="Connected thoughtfully. Chosen for the workflow."/></Reveal><div className="p-tools-grid">{tools.map(tool => <Reveal key={tool.name} className="p-tool"><span className="p-tool-logo"><img src={tool.image} alt="" width="30" height="30" loading="lazy"/></span><div><h3>{tool.name}</h3><p>{tool.category}</p></div></Reveal>)}</div></section>; }
function ProjectCard({ project }: { project: typeof projects[number] }) { return project.id === 2 ? <AssistantProjectCard /> : <VisualProjectCard project={project} />; }
function ProjectsSection({ full = false }: {
    full?: boolean;
}) {
    const [filter, setFilter] = useState('All work');
    const items = (full ? projects : projects.slice(0, 4)).filter(p => filter === 'All work' || p.category === filter);
    return <section id="projects" className="p-section p-container"><Reveal><Heading level={full ? 'h1' : 'h2'} eyebrow={full ? 'The portfolio' : 'Selected projects'} title="Less manual. More possible." description="A closer look at the systems I’ve built and the problems they solve."/></Reveal>{full && <div className="p-filters" aria-label="Filter projects">{['All work', 'AI systems', 'Automation'].map(item => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}{item === 'All work' && <span>{projects.length}</span>}</button>)}</div>}<div className="p-project-grid" aria-live="polite">{items.map(project => <ProjectCard key={project.id} project={project}/>)}</div>{!full && <div className="p-center"><ButtonLink secondary to="/projects">View all {projects.length} projects</ButtonLink></div>}</section>;
}
function ProcessSection() { return <section id="process" className="p-section p-container"><Reveal><Heading eyebrow="From idea to everyday use" title="Good systems start with listening."/></Reveal><div className="p-process-grid">{[['Understand', 'We map your current process, the repetitive tasks and the places where work gets stuck.'], ['Design', 'I turn those findings into a workflow blueprint, with clear tools, connections and priorities.'], ['Build & refine', 'I connect the system, check the edge cases and refine the workflow around how you actually work.']].map(([title, description], index) => <Reveal key={title} className="p-process-step"><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></Reveal>)}</div></section>; }
function ContactSection() { return <section id="contact" className="p-section p-container"><Reveal className="p-contact"><div className="p-contact-art" aria-hidden="true"><span className="p-contact-ring"/><Mail size={72} strokeWidth={1}/><span className="p-art-caption">LET’S CONNECT THE DOTS.</span></div><div><p className="p-eyebrow">Have something in mind?</p><h2>Let’s make<br />work <span>flow.</span></h2><p>Tell me what takes too much time.<br />Let’s find a smarter way to do it.</p><div className="p-button-row"><a className="p-button" href={identity.upwork} target="_blank" rel="noopener noreferrer">Hire me on Upwork <ArrowUpRight size={17}/></a></div></div></Reveal></section>; }
export function PortfolioHome() { return <Shell><Hero /><AboutSection /><ServicesSection /><SkillsSection /><ProjectsSection /><ProcessSection /><ContactSection /></Shell>; }
export function PortfolioProjects() { return <Shell title="Projects"><div className="p-page-top"><ProjectsSection full/></div><ContactSection /></Shell>; }
export function PortfolioAbout() { return <Shell title="About Bisam Ali"><AboutPageContent /></Shell>; }
export function PortfolioServices() { return <Shell title="Services"><ServicesPageContent /></Shell>; }
export function PortfolioProject() {
    const { id } = useParams();
    const project = projects.find(p => String(p.id) === id);
    if (!project)
        return <PortfolioNotFound />;
    if (project.id === 2) return <Shell title={project.title}><AssistantProjectDetail /></Shell>;
    return <Shell title={project.title}><VisualProjectDetail project={project} /></Shell>;
}
export function PortfolioContact() {
    const [draftReady, setDraftReady] = useState(false);
    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const body = `Name: ${form.get('name')}\nEmail: ${form.get('email')}\nCompany / website: ${form.get('company') || 'Not provided'}\nWorkflow audit: ${form.get('audit') ? 'Yes' : 'No'}\n\n${form.get('message')}`;
        window.location.href = `mailto:${identity.email}?subject=${encodeURIComponent('Automation project enquiry')}&body=${encodeURIComponent(body)}`;
        setDraftReady(true);
    }
    return <Shell title="Start a conversation"><section className="p-contact-page p-container"><div><p className="p-eyebrow">LET’S BUILD SOMETHING USEFUL</p><h1>It starts with<br />a conversation<span>.</span></h1><p>Share the process you’d like to improve, the tools you use and what a better working day would look like.</p><a className="p-text-link" href={`mailto:${identity.email}`}><Mail size={18}/>{identity.email}</a><a className="p-text-link" href={identity.upwork} target="_blank" rel="noreferrer">Or connect on Upwork <ArrowUpRight size={18}/></a><div className="p-contact-note"><h3>What we’ll explore</h3><p>Your current workflow, opportunities for automation and a practical plan for the next step.</p></div></div><form className="p-form" onSubmit={submit}><label htmlFor="contact-name">Your name <span>*</span></label><input id="contact-name" name="name" autoComplete="name" required placeholder="How should I address you?" maxLength={150}/><label htmlFor="contact-email">Email address <span>*</span></label><input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" maxLength={200}/><label htmlFor="contact-company">Company / website <small>Optional</small></label><input id="contact-company" name="company" autoComplete="organization" placeholder="Your business or website" maxLength={200}/><label htmlFor="contact-message">What would you like to automate? <span>*</span></label><textarea id="contact-message" name="message" required rows={5} maxLength={4000} placeholder="A little context goes a long way…"/><label className="p-checkbox"><input type="checkbox" name="audit"/>I’d like a review of my current workflows</label><button type="submit" className="p-button">Prepare email enquiry <Send size={17}/></button><p className="p-form-help">Opens a draft in your email app. Review it and press send there to deliver your enquiry.</p>{draftReady && <p className="p-form-status" role="status">Your email draft is ready to open. If your email app didn’t launch, email {identity.email} or use the Upwork link. Your enquiry has not been sent by this website.</p>}</form></section><section className="p-container p-contact-secondary"><p>Other Nexotica enquiries</p><a href="mailto:sales@nexotica.com">sales@nexotica.com</a><a href="mailto:careers@nexotica.com">careers@nexotica.com</a></section></Shell>;
}
export function PortfolioReviews() { return <Shell title="Client feedback"><section className="p-page-top p-section p-container"><Heading level="h1" eyebrow="Client feedback" title="In their words." description="Feedback from projects delivered through Nexotica."/><div className="p-review-grid">{existing.reviews.map((review, i) => <Reveal className="p-review" key={`${review.name}-${i}`}><span className="p-quote-mark" aria-hidden="true">“</span><blockquote>{review.text}</blockquote><div><span className="p-review-avatar" aria-hidden="true">{review.name.charAt(0)}</span><p><strong>{review.name}</strong><small>{review.role}</small></p></div></Reveal>)}</div></section><ContactSection /></Shell>; }
export function PortfolioNotFound() { return <Shell title="Page not found"><section className="p-not-found p-container"><p className="p-eyebrow">404 / A LOOSE CONNECTION</p><h1>This page isn’t here.</h1><p>Let’s get you back to the work.</p><ButtonLink to="/projects">Explore the projects</ButtonLink></section></Shell>; }
