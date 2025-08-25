import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleResumeClick = () => {
    window.open('/assets/Sebastian_Gonzalez_Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sebastian-gm', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sebastiangonzalez-de', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sebastiangm.dev@gmail.com', label: 'Email' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 reveal">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Sebastian Gonzalez</span>
                <br />
                <span className="text-gradient">Data Engineer</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                I design reliable data pipelines and production-grade MLOps—from ingestion to deployment—so teams can trust their data and ship faster.
              </p>
            </div>

            {/* Micro Stats */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                5+ years in data
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                AWS & Azure
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary-glow mr-2"></div>
                ETL/ELT • Spark • Airflow • Databricks
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleResumeClick}
                className="btn-hero text-base px-6 py-3 h-auto"
              >
                <Download className="w-4 h-4 mr-2" />
                View Resume
              </Button>
              
              <Button 
                variant="outline"
                onClick={scrollToContact}
                className="btn-outline-glass text-base px-6 py-3 h-auto"
              >
                Contact Me
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg tech-chip hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="flex justify-center lg:justify-end reveal">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                <img
                  src="/assets/profile.png"
                  alt="Sebastian Gonzalez - Data Engineer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-primary flex items-center justify-center">
                          <span class="text-6xl font-bold text-primary-foreground">SG</span>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Floating glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;