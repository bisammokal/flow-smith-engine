export const TechStackSection = () => {
  const technologies = [
    { name: "Zapier", logo: "/logos/zapier.png" },
    { name: "Make", logo: "/logos/make.png" },
    { name: "n8n", logo: "/logos/n8n.png" },
    { name: "OpenAI", logo: "/logos/openai.png" },
    { name: "Dialogflow", logo: "/logos/dialogflow.png" },
    { name: "ClickUp", logo: "/logos/clickup.svg" },
    { name: "Zoho", logo: "/logos/zoho.svg" },
    { name: "Shopify", logo: "/logos/shopify.svg" },
    { name: "WordPress", logo: "/logos/wordpress.png" },
    { name: "Google Sheets", logo: "/logos/google-sheets.png" },
    { name: "Slack", logo: "/logos/slack.png" },
    { name: "Gmail", logo: "/logos/gmail.png" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-full blur-3xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold relative z-10 mb-4">
            Tools We{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Use
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Powered by the best automation tools in the industry.
          </p>
        </div>

        {/* Infinite scrolling logos */}
        <div className="relative">
          <div className="logo-scroll">
            <div className="logo-scroll-content">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="logo-item glass-card hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="h-12 w-auto object-contain relative z-10"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};
