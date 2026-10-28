import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
export default function Index() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sebastian Gonzalez",
            url: "https://sebastiangm.com",
            description:
              "AI, automation, and data specialist with experience in multinational operations, financial services, and international business.",
            knowsAbout: [
              "Business automation",
              "Applied artificial intelligence",
              "Data engineering",
              "Azure cloud integrations",
              "Business intelligence",
              "Credit risk",
            ],
            knowsLanguage: ["English", "Spanish"],
            sameAs: [
              "https://github.com/sebastian-gm",
              "https://www.linkedin.com/in/sebastian-sgm/",
            ],
            alumniOf: [
              "Douglas College",
              "European University of Madrid",
              "Andres Bello University",
            ].map((name) => ({ "@type": "EducationalOrganization", name })),
          }),
        }}
      />
      <Navigation />
      <main id="main" tabIndex={-1}>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
