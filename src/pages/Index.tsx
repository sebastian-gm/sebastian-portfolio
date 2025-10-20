import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import BackToTop from '@/components/BackToTop';
import { initAnimations } from '@/utils/animations';
import ErrorBoundary from '@/components/ErrorBoundary';

const Index = () => {
  useEffect(() => {
    // Initialize scroll reveal animations
    const timer = setTimeout(() => {
      initAnimations();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://sebastiangm.com/#person",
                "name": "Sebastian Gonzalez",
                "jobTitle": "Data & BI Analyst",
                "description": "Data & BI Analyst with 6+ years building executive dashboards (Tableau, Power BI), SQL/Python reporting, and analytics across Snowflake, AWS & Azure. Finance & credit-risk domain depth.",
                "url": "https://sebastiangm.com",
                "email": "sebastiangm.dev@gmail.com",
                "sameAs": [
                  "https://github.com/sebastian-gm",
                  "https://www.linkedin.com/in/sebastian-sgm/"
                ],
                "worksFor": {
                  "@type": "Organization",
                  "name": "Freelance"
                },
                "alumniOf": [
                  {
                    "@type": "EducationalOrganization",
                    "name": "Douglas College"
                  },
                  {
                    "@type": "EducationalOrganization", 
                    "name": "European University of Madrid"
                  },
                  {
                    "@type": "EducationalOrganization",
                    "name": "Andres Bello University"
                  }
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://sebastiangm.com/#website",
                "url": "https://sebastiangm.com",
                "name": "Sebastian Gonzalez - Data & BI Analyst Portfolio",
                "description": "Professional portfolio showcasing data & BI analysis projects, executive dashboards, and analytics across Snowflake, AWS & Azure.",
                "author": {
                  "@id": "https://sebastiangm.com/#person"
                }
              }
            ]
          })
        }}
      />
      
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ErrorBoundary>
          <SkillsSection />
        </ErrorBoundary>
        <EducationSection />
        <ContactSection />
      </main>
      
      <BackToTop />
    </div>
  );
};

export default Index;
