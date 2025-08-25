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
                "@id": "https://sebastiangonzalez.dev/#person",
                "name": "Sebastian Gonzalez",
                "jobTitle": "Data Engineer",
                "description": "Data Engineer with 5+ years experience building scalable ETL/ELT pipelines, MLOps systems, and cloud data platforms on AWS & Azure.",
                "url": "https://sebastiangonzalez.dev",
                "email": "sebastiangm.dev@gmail.com",
                "sameAs": [
                  "https://github.com/sebastian-gm",
                  "https://linkedin.com/in/sebastiangonzalez-de"
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
                "@id": "https://sebastiangonzalez.dev/#website",
                "url": "https://sebastiangonzalez.dev",
                "name": "Sebastian Gonzalez - Data Engineer Portfolio",
                "description": "Professional portfolio showcasing data engineering projects, ETL/ELT pipelines, and MLOps systems.",
                "author": {
                  "@id": "https://sebastiangonzalez.dev/#person"
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
