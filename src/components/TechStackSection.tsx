import { Code2 } from "lucide-react";

export const TechStackSection = () => {
  const technologies = [
    "Zapier",
    "Make (Integromat)",
    "n8n",
    "OpenAI",
    "Dialogflow",
    "ClickUp",
    "Zoho",
    "Shopify",
    "WordPress",
    "Google Sheets",
    "Slack",
    "Gmail",
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Technology Stack</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powered by Leading{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              No-Code & AI Tools
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We integrate 100+ platforms seamlessly to keep your systems connected
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all text-center group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-foreground">{tech}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            And many more... We work with whatever tools you already use
          </p>
        </div>
      </div>
    </section>
  );
};
