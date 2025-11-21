import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Workflow,
  Database,
  ShoppingCart,
  Brain,
  MessageSquare,
  Mic,
  Plug,
  BarChart3,
  Target,
  Mail,
  Calendar,
  UserPlus,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Repeat,
  ArrowRight,
  FileText,
  Users,
  Headphones,
  Wrench,
  Star,
  BellRing,
  AlertCircle,
  BookOpen,
  User,
  Search,
  Send,
  FolderOpen,
} from "lucide-react";

const Services = () => {
  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const coreServices = [
    {
      icon: Workflow,
      title: "Workflow Automation (n8n / Make / Zapier)",
      description:
        "We connect your favorite apps and build automated workflows that eliminate repetitive manual work — from lead entry to report generation — saving teams 15+ hours every week and increasing overall revenue by 40–45% through faster lead response and process efficiency.",
    },
    {
      icon: Database,
      title: "CRM Automation (Zoho, ClickUp, Monday, Close)",
      description:
        "Automate your entire sales pipeline — from lead capture to follow-ups — and keep your CRM always updated in real time. Businesses using our CRM automation see 30–50% faster deal closures, 20% higher conversion rates, and save 10+ hours per week on manual data entry and task management.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Automation (Shopify / WooCommerce / WordPress)",
      description:
        "Streamline your entire store workflow by automating orders, inventory updates, refunds, and customer notifications through Make or n8n. Stores using our automations report 35–50% faster order processing, 40% fewer fulfillment errors, and 20–30% revenue growth from improved response time and customer satisfaction.",
    },
  ];

  const aiSolutions = [
    {
      icon: Brain,
      title: "AI Content Automation (OpenAI / Flowise)",
      description:
        "Auto-generate and publish blogs, social posts, and emails using AI-driven workflows — perfect for content teams and agencies.",
    },
    {
      icon: MessageSquare,
      title: "Chatbot & AI Agent Development (Dialogflow / Flowise / Rasa)",
      description:
        "Deploy intelligent chatbots for websites and CRMs that answer FAQs, qualify leads, and guide visitors 24/7.",
    },
    {
      icon: Mic,
      title: "Voice AI Automation",
      description:
        "Create voice-to-voice or speech-to-text assistants that can greet, qualify, and support customers hands-free.",
    },
  ];

  const customServices = [
    {
      icon: Plug,
      title: "API & Webhook Integrations",
      description:
        "Connect tools that don't natively integrate. We design secure API pipelines that move data seamlessly between systems.",
    },
    {
      icon: BarChart3,
      title: "Reporting & Dashboard Automation",
      description:
        "Build live dashboards and automated performance reports inside Google Sheets or Data Studio — always accurate, always up-to-date.",
    },
  ];

  const workflows = [
    {
      icon: Mail,
      title: "AI-Powered Email Reply Automation",
      hook: "Respond to every lead instantly with personalized, context-aware emails powered by your CRM data.",
      overview: "This workflow turns your inbox into a smart AI system that drafts perfect email responses using full HubSpot context — including lead history, deal stage, notes, and past conversations — then sends it for quick approval via Slack.",
      problem: "Slow or inconsistent email replies, manual composing of repetitive messages, missed leads due to delayed responses, team overwhelmed with inbox volume.",
      howItWorks: "When an email arrives, the system pulls full HubSpot data for that lead. AI drafts a highly personalized, professional response. You get a Slack notification to approve or edit. Once approved, the email is automatically sent.",
      benefits: "10× faster response times, professional consistent messaging every time, zero missed leads, higher close rates due to instant engagement.",
      visualization: "Every email is answered instantly and perfectly — without manually typing a single line.",
      whyLoveIt: "Because it makes their team look ultra-responsive and reliable, increasing trust and conversions effortlessly.",
    },
    {
      icon: FileText,
      title: "AI Account Intelligence Briefs",
      hook: "Get instant, ultra-clear account summaries for smarter outreach and faster deal closing.",
      overview: "This workflow creates clean, actionable account briefs using Salesforce + MadKudu scoring + AI analysis so your sales team always knows exactly what to say and who to prioritize.",
      problem: "Sales team wasting hours researching every lead, reps not knowing which accounts deserve priority, weak personalization in cold outreach.",
      howItWorks: "Pulls all account data from Salesforce, adds MadKudu scoring, AI converts the data into a 1-page brief with insights, risks, and talking points.",
      benefits: "Faster, richer preparation, hyper-personalized messages, higher meeting-booking rate, sales reps become dramatically more effective.",
      visualization: "Your reps open Salesforce and instantly see a clean, AI-generated brief telling them exactly what to say and how to win the account.",
      whyLoveIt: "Because it upgrades their sales team's intelligence without increasing headcount.",
    },
    {
      icon: Headphones,
      title: "Automated AI Customer Support",
      hook: "Cut support workload instantly with an AI that replies using your own documentation.",
      overview: "This workflow reads your Mintlify documentation and answers customer support tickets intelligently through Zendesk — only escalating complex cases.",
      problem: "High support cost, repetitive questions draining your team, delayed responses, poor customer satisfaction.",
      howItWorks: "AI detects new tickets, looks up your documentation for accurate answers, replies instantly within 3 messages, escalates automatically when needed.",
      benefits: "Support team workload drops by 40–70%, faster replies → happier customers, more accurate and consistent answers.",
      visualization: "Your documentation becomes a 24/7 support agent that never sleeps.",
      whyLoveIt: "Because it delivers instant support without hiring more staff.",
    },
    {
      icon: Wrench,
      title: "AI-Driven HVAC Appointment Scheduler",
      hook: "Let AI handle service booking, reminders, and email communication automatically.",
      overview: "This workflow fully automates HVAC scheduling — from customer request to technician assignment to reminders — using AI, Gmail, and Google Calendar.",
      problem: "Missed or double-booked appointments, manual scheduling chaos, slow response times, inefficient technician planning.",
      howItWorks: "AI chats with the customer, finds available slots, books automatically in Google Calendar, sends confirmation emails + reminders.",
      benefits: "Smooth operations, fewer booking mistakes, better customer experience, no wasted technician time.",
      visualization: "Customers request service, and the system handles everything automatically.",
      whyLoveIt: "Because it eliminates scheduling chaos and improves service delivery.",
    },
    {
      icon: Target,
      title: "Fully Automated Lead Generation Engine",
      hook: "Find prospects, enrich data, and send personalized cold emails — all on autopilot.",
      overview: "This workflow handles lead sourcing, qualification, personalization, and cold email outreach automatically using Apify, AI, Gmail, and Telegram alerts.",
      problem: "Slow manual lead scraping, zero personalization, low campaign results, wasting hours on admin work.",
      howItWorks: "Scrapes fresh leads from the web, enriches profiles, creates AI-personalized emails, sends outreach via Gmail, notifies you on Telegram for hot leads.",
      benefits: "Consistent leads daily, personalized emails → higher replies, no manual effort, predictable sales pipeline.",
      visualization: "Your outreach runs 24/7 while you focus on selling.",
      whyLoveIt: "Because it removes 90% of the manual work in lead generation.",
    },
    {
      icon: Star,
      title: "Automated Review & Sentiment System",
      hook: "Collect reviews automatically and instantly know customer happiness levels.",
      overview: "This workflow collects client reviews, analyzes sentiment using AI, and shares insights instantly through Slack + HighLevel.",
      problem: "Low review collection rate, not knowing when a customer becomes unhappy, missing opportunities to improve services.",
      howItWorks: "Sends automated review requests, AI analyzes tone, keywords, and satisfaction, flags negative reviews instantly, sends insights to Slack.",
      benefits: "More consistent 5-star reviews, immediate alerts for unhappy clients, stronger online reputation.",
      visualization: "You see customer satisfaction in real time — automatically.",
      whyLoveIt: "Because it protects their reputation and increases retention.",
    },
    {
      icon: UserPlus,
      title: "Done-For-You Onboarding Automation",
      hook: "Deliver a smooth, guided onboarding journey without manual follow-ups.",
      overview: "This workflow creates a complete onboarding experience using HubSpot, personalized emails, and team alerts to ensure every new customer feels taken care of.",
      problem: "Missing onboarding steps, customers confused after purchase, low activation rate, too many manual emails.",
      howItWorks: "Detects a new customer, sends step-by-step onboarding emails, alerts your team when needed, tracks progress inside HubSpot.",
      benefits: "Better customer experience, higher activation, fewer support issues, streamlined operations.",
      visualization: "Every new customer gets the perfect onboarding journey automatically.",
      whyLoveIt: "Because great onboarding increases lifetime value.",
    },
    {
      icon: MessageSquare,
      title: "AI-Written Personalized Icebreakers",
      hook: "Turn cold emails warm with ultra-personalized opening lines built in seconds.",
      overview: "This workflow analyzes your prospect's online presence and generates custom icebreakers for higher cold email responses.",
      problem: "Low cold email reply rate, generic intros, manual research taking hours.",
      howItWorks: "Pulls prospect data from Instantly, AI analyzes content, generates a unique 1–2 sentence opener.",
      benefits: "Higher reply rate, strong first impression, emails feel human and researched.",
      visualization: "Every email starts with a personalized intro that instantly grabs attention.",
      whyLoveIt: "Because personalization dramatically boosts conversions.",
    },
    {
      icon: Calendar,
      title: "AI Meeting Follow-Up Assistant",
      hook: "Never forget a follow-up again — AI creates perfect next-step suggestions after every meeting.",
      overview: "This workflow scans your Google Calendar events, understands context, and generates tailored follow-up messages delivered via WhatsApp and email.",
      problem: "Forgetting to follow up, weak or delayed communication, losing deals after a good meeting.",
      howItWorks: "Detects meeting completion, AI analyzes meeting notes, creates follow-up message options, sends through WhatsApp & email.",
      benefits: "Stronger relationships, higher deal conversion, perfect follow-ups every time.",
      visualization: "Meetings end — and follow-ups are sent automatically.",
      whyLoveIt: "Because follow-ups are the key to closing more deals.",
    },
    {
      icon: AlertCircle,
      title: "AI Churn Prediction System",
      hook: "Identify customers at risk of leaving — before they actually leave.",
      overview: "This workflow analyzes customer behavior using HubSpot + Google Sheets and predicts which customers are likely to churn.",
      problem: "Customers leaving without warning, no visibility into customer satisfaction, declining recurring revenue.",
      howItWorks: "Pulls behavioral data, AI scores churn probability, sends alerts for high-risk customers.",
      benefits: "Saves at-risk clients, higher retention, more predictable revenue.",
      visualization: "You get a list of customers who need attention — before they leave.",
      whyLoveIt: "Because saving one client is often more valuable than acquiring three.",
    },
    {
      icon: TrendingUp,
      title: "AI Multi-Agent Revenue Strategy Engine",
      hook: "AI specialists analyze your funnel and generate an actionable plan to boost conversions.",
      overview: "This workflow uses multiple AI agents to review your customer journey, identify bottlenecks, and generate a CRO-focused growth strategy.",
      problem: "Low conversions, no clarity on what to fix, guesswork in marketing decisions.",
      howItWorks: "AI agents analyze your funnel, identify friction points, give prioritized recommendations.",
      benefits: "Higher revenue per visitor, clear action steps, data-driven decisions.",
      visualization: "AI tells you exactly what to fix in your funnel and why.",
      whyLoveIt: "Because it highlights the highest-impact revenue opportunities instantly.",
    },
    {
      icon: Users,
      title: "Instant Lead Qualification System",
      hook: "Turn raw leads into fully qualified opportunities with automatic scoring and routing.",
      overview: "This workflow qualifies leads based on their Typeform responses, enriches data, and routes them to the right team instantly inside HubSpot.",
      problem: "Sales team wasting time on weak leads, no scoring system, slow response from the right team.",
      howItWorks: "Lead submits a form, AI analyzes answers, lead is scored and enriched, automatically routed to the right owner.",
      benefits: "Higher close rate, faster response to high-value leads, organized and efficient pipeline.",
      visualization: "Every lead instantly gets qualified and assigned to the perfect salesperson.",
      whyLoveIt: "Because it eliminates guesswork and speeds up growth.",
    },
    {
      icon: BookOpen,
      title: "Smart Website Knowledge Chatbot",
      hook: "Give visitors instant answers using an AI trained on your documents.",
      overview: "This workflow creates a website chatbot that pulls knowledge directly from your Google Drive files to answer customer questions with accuracy.",
      problem: "High dependency on support team, visitors leaving because answers aren't clear, slow manual replies.",
      howItWorks: "AI reads your Google Drive documents, understands your product/services, answers customer questions instantly.",
      benefits: "Lower support workload, fewer abandoned visitors, more conversions from your website.",
      visualization: "A knowledgeable chatbot that instantly answers like your best team member.",
      whyLoveIt: "Because every visitor gets answers immediately — boosting trust and conversions.",
    },
    {
      icon: User,
      title: "AI-Powered Personal Executive Assistant",
      hook: "Manage emails, meetings, and priorities automatically — like having a full-time personal assistant.",
      overview: "This workflow turns your inbox, calendar, and Slack into a unified AI-powered executive assistant that manages tasks, flags priorities, drafts messages, and keeps you organized 24/7.",
      problem: "Too many emails and messages slowing decision-making, missing important follow-ups, manual checking of Slack, calendar, and inbox, overloaded executives who need clarity fast.",
      howItWorks: "AI scans email + Slack + calendar, detects important conversations, missed messages, deadlines, creates summaries, tasks, reminders, suggests replies and sends priority alerts.",
      benefits: "Ultra-fast decision-making, zero missed follow-ups, better communication and workflow, total clarity in daily priorities.",
      visualization: "An AI assistant that tells you what matters and what needs your attention — before you even ask.",
      whyLoveIt: "Because it eliminates chaos and gives executives peace of mind with automated clarity.",
    },
    {
      icon: Search,
      title: "Automated Email Discovery Engine",
      hook: "Find verified company emails instantly — fully automated.",
      overview: "This workflow searches for company domains, finds valid emails using Anymail Finder, stores results in Google Sheets, and sends alerts through Telegram.",
      problem: "Manual search for emails, low accuracy, time wasted on enrichment, slower outreach due to missing contacts.",
      howItWorks: "User enters company name, AI finds the domain, Anymail Finder finds verified emails, logs them in Sheets, sends alerts to Telegram.",
      benefits: "Faster prospecting, verified email accuracy, zero manual research, easy spreadsheet tracking.",
      visualization: "You enter a company — the system instantly gives you a verified email with no manual effort.",
      whyLoveIt: "Because it unlocks new prospects without wasting hours on research.",
    },
    {
      icon: Mic,
      title: "AI-Powered Voice Chatbot",
      hook: "Talk to your knowledge base using a natural, human-like AI voice.",
      overview: "This workflow creates a voice-based AI chatbot using ElevenLabs + InfraNodus that speaks answers pulled from your knowledge database.",
      problem: "Complex documentation customers don't want to read, slow support, text-only chatbots that feel robotic.",
      howItWorks: "User talks to the bot, ElevenLabs handles natural voice input/output, InfraNodus provides deep knowledge reasoning, AI replies instantly with accurate info.",
      benefits: "Human-like voice interactions, faster customer support, more engaging experience, reduces load on support teams.",
      visualization: "A friendly AI voice that answers your questions instantly with perfect accuracy.",
      whyLoveIt: "Because customers prefer talking instead of reading long documents — and this AI delivers that experience.",
    },
    {
      icon: FileText,
      title: "AI Deep Research Sales Agent",
      hook: "Generate lead magnet-ready research reports automatically.",
      overview: "This workflow performs deep research on any topic, competitor, or industry and converts it into a clean, actionable lead magnet or summary using AI.",
      problem: "Hours wasted on manual research, low-quality sales content, difficulty preparing lead magnets, slow content production.",
      howItWorks: "AI collects public data, analyzes trends, opportunities, and insights, summarizes into clean reports, outputs ready-to-use PDF or text content.",
      benefits: "Instant research reports, higher-quality lead magnets, saves hours of manual research, helps create authority-building content.",
      visualization: "You type a topic — the system delivers a full research report ready to use in your marketing.",
      whyLoveIt: "Because it boosts content output and positions them as experts without extra work.",
    },
    {
      icon: Send,
      title: "Automated Lead Scraping & Outreach Engine",
      hook: "Scrape leads, analyze reviews, and send personalized outreach automatically.",
      overview: "This workflow scrapes potential leads from Yelp & Trustpilot, enriches them, and sends AI-personalized cold emails — fully automated.",
      problem: "Manual scraping taking hours, no personalization in emails, unpredictable outreach results, low conversion from generic messaging.",
      howItWorks: "Scrapes businesses with filters, extracts review insights, enriches business details, AI drafts personalized cold emails, sends via Gmail or SMTP.",
      benefits: "Daily fresh leads, higher reply rates, personalized emails at scale, no manual work.",
      visualization: "A system that finds new businesses and sends perfect personalized offers automatically.",
      whyLoveIt: "Because lead generation + outreach becomes effortless and scalable.",
    },
    {
      icon: FolderOpen,
      title: "Smart Website Knowledge Chatbot",
      hook: "Turn your Google Drive documents into a powerful AI chatbot.",
      overview: "This system converts your Google Drive PDFs, docs, and files into a fully functional website chatbot powered by GPT-4 and Mistral.",
      problem: "Visitors leave when they can't find info, support team overloaded with repetitive questions, slow responses reduce conversions.",
      howItWorks: "Reads all documents in Google Drive, builds an AI knowledge base, chatbot embedded on your website, visitors ask questions → instant answers.",
      benefits: "24/7 instant support, fewer support tickets, higher conversions, accurate answers based on your own files.",
      visualization: "Your website gets a smart AI chatbot that answers like your best team member.",
      whyLoveIt: "Because it boosts trust, improves user experience, and reduces support cost.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Section 1 - Header */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-12 md:pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary mb-3 sm:mb-4 md:mb-6">
            Smart Automations That Drive Growth
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We design data-driven no-code and AI automations that save 15+ hours weekly, 
            reduce costs by 60%, and increase client conversion by up to 40% — so you scale 
            faster with less effort.
          </p>
        </div>
      </section>

      {/* Section 2 - Core Automation Services */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
            Core Automation Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="w-full h-full p-4 sm:p-6 md:p-8 group hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors relative z-10">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 relative z-10 leading-tight">{service.title}</h3>
                  <p className="text-sm sm:text-base text-[#EDEDED] leading-relaxed relative z-10">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3 - AI & Chat Solutions */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
            AI & Chat Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {aiSolutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={solution.title}
                  className="w-full h-full p-4 sm:p-6 md:p-8 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6 relative z-10">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 relative z-10 leading-tight">{solution.title}</h3>
                  <p className="text-sm sm:text-base text-[#EDEDED] leading-relaxed relative z-10">
                    {solution.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4 - Custom Integration & Analytics */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
            Custom Integration & Analytics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {customServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="w-full h-full p-4 sm:p-6 md:p-8 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6 relative z-10">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 relative z-10 leading-tight">{service.title}</h3>
                  <p className="text-sm sm:text-base text-[#EDEDED] leading-relaxed relative z-10">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5 - The Complete AI Automation Suite */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl opacity-25" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text">
              The Complete AI Automation Suite
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              13 premium automation workflows designed to transform every aspect of your business operations.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-8 md:mb-12">
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {workflows.map((workflow, index) => {
                const Icon = workflow.icon;
                return (
                  <AccordionItem 
                    key={workflow.title} 
                    value={`item-${index}`}
                    className="glass-card overflow-hidden group hover:shadow-glow transition-all duration-500"
                  >
                    <AccordionTrigger className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 hover:no-underline">
                      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-left w-full">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-300 flex-shrink-0">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text truncate pr-2">
                            {workflow.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                            {workflow.hook}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
                      <div className="space-y-4 sm:space-y-6 pt-4 border-t border-border/50">
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-primary mb-2">Overview</h4>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {workflow.overview}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-primary mb-2">Problem This Solves</h4>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {workflow.problem}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-primary mb-2">How It Works</h4>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {workflow.howItWorks}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-primary mb-2">Key Benefits</h4>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {workflow.benefits}
                          </p>
                        </div>

                        <div className="glass-card p-4 sm:p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                          <h4 className="text-base sm:text-lg font-semibold text-primary mb-2">What You'll Experience</h4>
                          <p className="text-sm sm:text-base text-foreground leading-relaxed italic mb-3 sm:mb-4">
                            "{workflow.visualization}"
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            <span className="font-medium text-accent">Why businesses love it:</span> {workflow.whyLoveIt}
                          </p>
                        </div>

                        <div className="pt-4">
                          <Button
                            variant="hero"
                            size="lg"
                            onClick={scrollToContact}
                            className="w-full group shadow-glow px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base active:scale-95"
                          >
                            <span className="inline-flex items-center justify-center gap-2">
                              Book a Demo for This Workflow <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          <div className="text-center">
            <div className="glass-card p-4 sm:p-6 md:p-8 lg:p-10 backdrop-blur-xl inline-block hover:shadow-glow transition-all duration-500 max-w-3xl mx-auto w-full">
              <p className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 relative z-10 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text">
                Get the Complete Suite
              </p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl relative z-10 mx-auto">
                Transform your entire business with our comprehensive automation package. All 15+ workflows working together seamlessly.
              </p>
              <Button
                variant="cta"
                size="lg"
                onClick={scrollToContact}
                className="relative z-10 shadow-glow w-full sm:w-auto px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg active:scale-95"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  Book a Free Demo of the Full Suite <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Book a free strategy call and see how our automation experts can transform your operations.
          </p>
          <Button
            variant="cta"
            size="lg"
            onClick={scrollToContact}
            className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base"
          >
            <span className="inline-flex items-center justify-center gap-2">
              Book Free Strategy Call <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
