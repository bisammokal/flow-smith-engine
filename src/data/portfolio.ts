import existing from './existing-content.json';
import revenueImage from '@/assets/case-study-system-architecture.png';
import assistantImage from '@/assets/case-study-ai-assistant-architecture.png';
import leadImage from '@/assets/case-study-lead-engine-workflow.png';
import leadArchitecture from '@/assets/case-study-lead-system-architecture.png';
import chatbotImage from '@/assets/case-study-chatbot-workflow.jpg';
import schedulerImage from '@/assets/case-study-social-scheduler.jpg';
import { outreachProject } from './outreach-engine';
import { emailTriageProject } from './email-triage';

export const identity = { name: 'Bisam Ali', shortName: 'Bisam Ali', email: 'hello@nexotica.com', upwork: 'https://www.upwork.com/freelancers/~01ae02475a9e9fcbd4?mp_source=share' };
const projectContent = [
  { image: revenueImage, category: 'AI systems', shortTitle: 'A connected brain for revenue operations.', tools: ['Multi-agent AI', 'CRM integration', 'Revenue analytics'], summary: 'A CRO-led system that connects pipeline analysis, attribution, forecasting and pricing in one coordinated workflow.', challenge: 'Revenue teams were working with conflicting numbers. Forecasts took days, and pipeline problems stayed hidden for weeks.', approach: 'I connected six specialist agents around a shared revenue workflow, turning fragmented data into coordinated analysis and actions.', result: '60-second forecasts', gallery: [] },
  { image: assistantImage, category: 'AI systems', shortTitle: 'An AI assistant that handles the everyday.', tools: ['AI agents', 'Email', 'Calendar', 'Knowledge memory'], summary: 'An autonomous personal assistant for a solo founder, connecting tasks, email, research and scheduling.', challenge: 'Repetitive admin, delayed replies and constant task switching were taking attention away from the work that mattered.', approach: 'I brought task execution, email intelligence, research, reminders and calendar management into one natural-language workflow.', result: '52+ hours saved monthly', gallery: [] },
  { image: leadImage, category: 'Automation', shortTitle: 'From prospect research to a ready pipeline.', tools: ['AI prospecting', 'Google Sheets', 'Gmail'], summary: 'A lead engine that researches prospects, validates contact data and prepares personalized outreach.', challenge: 'Manual Yelp and Trustpilot research was taking 15–20 hours a week, with an inconsistent flow of new prospects.', approach: 'I connected dual-source research, geographic analysis, cleaning and deduplication with Google Sheets and an AI email workflow.', result: '120+ leads monthly', gallery: [leadArchitecture] },
  { image: chatbotImage, category: 'AI systems', shortTitle: 'Your documents. A chatbot that understands them.', tools: ['Google Drive', 'Mistral OCR', 'Qdrant', 'OpenAI'], summary: 'A document-grounded website assistant with a Google Drive knowledge base, OCR and semantic retrieval.', challenge: 'The existing chatbot could not answer questions buried in PDFs and internal documents. Updating its knowledge required manual copy-pasting.', approach: 'I connected a watched Drive folder to OCR, chunking, embeddings and Qdrant retrieval, giving the chat agent source-grounded context and conversation memory.', result: '68% of document questions automated', gallery: [] },
  { image: schedulerImage, category: 'Automation', shortTitle: 'One workflow. Four publishing channels.', tools: ['n8n', 'Google Sheets', 'Google Drive', 'Airtable', 'YouTube', 'Facebook Graph API', 'LinkedIn'], summary: 'A dual-path n8n workflow that publishes short-form videos and image/text posts to YouTube, Instagram Reels, Facebook and LinkedIn, with centralized content queues and automatic posting-status tracking.', challenge: 'Daily uploads across four platforms led to missed posting windows, repetitive work and chaotic content tracking. Platform-specific API requirements, especially Instagram Reels containers, added integration complexity.', approach: 'I built two scheduled n8n paths: one for YouTube and Instagram videos, and another for Facebook and LinkedIn image/text posts. Both run at 9 AM and 7 PM, pulling content from Google Sheets and Google Drive, staging Instagram details in Airtable, and marking completed posts to prevent duplicates.', result: '4 platforms · 2 daily schedules', gallery: [] },
];
export const projects = [...existing.projects.map((project, index) => ({ ...project, ...projectContent[index] })), outreachProject, emailTriageProject];
export const tools = [
  { name: 'n8n', image: '/logos/n8n.png', category: 'Workflow orchestration' },
  { name: 'Make', image: '/logos/make.png', category: 'App integrations' },
  { name: 'Zapier', image: '/logos/zapier.png', category: 'Workflow automation' },
  { name: 'OpenAI', image: '/logos/openai.png', category: 'AI agents & language' },
  { name: 'Google Sheets', image: '/logos/google-sheets.png', category: 'Data & reporting' },
  { name: 'Slack', image: '/logos/slack.png', category: 'Notifications & approvals' },
  { name: 'ClickUp', image: '/logos/clickup.svg', category: 'Tasks & operations' },
  { name: 'Shopify', image: '/logos/shopify.svg', category: 'E-commerce workflows' },
  { name: 'Zoho', image: '/logos/zoho.svg', category: 'CRM automation' },
  { name: 'Dialogflow', image: '/logos/dialogflow.png', category: 'Conversational AI' },
  { name: 'Gmail', image: '/logos/gmail.png', category: 'Email workflows' },
  { name: 'WordPress', image: '/logos/wordpress.png', category: 'Content & commerce' },
];
export const services = [
  { title: 'Workflow & CRM automation', description: 'Give repetitive work a reliable system. I connect your apps, organize your pipeline and keep information moving.', points: ['n8n, Make & Zapier workflows', 'Zoho, ClickUp, Monday & Close integrations', 'Lead capture, follow-ups & onboarding'] },
  { title: 'AI agents & assistants', description: 'Put AI to work inside your operations, with the right context, connected tools and clear boundaries.', points: ['Custom chatbots & knowledge retrieval', 'Personal assistants & multi-agent systems', 'Voice AI & conversational workflows'] },
  { title: 'Content & commerce systems', description: 'Connect the work behind your store and content channels, from a shared queue to the final customer update.', points: ['Shopify, WooCommerce & WordPress', 'AI content generation & scheduled publishing', 'Orders, inventory & customer notifications'] },
  { title: 'Integrations & intelligence', description: 'Make disconnected tools work together and bring useful information into view without another manual report.', points: ['Custom API & webhook pipelines', 'Automated reporting & dashboards', 'Google Sheets & Data Studio workflows'] },
];
export { existing };
