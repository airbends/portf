import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { ExperienceJourney } from "@/components/portfolio/ExperienceJourney";
import { TechStack } from "@/components/portfolio/TechStack";
import { Certifications } from "@/components/portfolio/Certifications";
import { Achievements } from "@/components/portfolio/Achievements";
import { Education } from "@/components/portfolio/Education";
import { WhyHireMe } from "@/components/portfolio/WhyHireMe";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const TITLE = "Irfan Inamdar — Full Stack Developer & AI Automation Engineer";
const DESC = "Pune based Full Stack Developer building scalable web applications and agentic AI systems with React, Node, Django, OpenAI APIs and LangChain.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Irfan Inamdar, Full Stack Developer, AI Automation Engineer, React, Node.js, Django, LangChain, BCA 2026, Pune Developer" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Irfan Inamdar",
          jobTitle: "Full Stack Developer & AI Automation Engineer",
          email: "mailto:irfaninamdar.work@gmail.com",
          url: "https://www.linkedin.com/in/irfan-i-121753281",
          address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "University of Pune" },
          knowsAbout: ["React.js", "Node.js", "Django", "FastAPI", "MySQL", "PostgreSQL", "OpenAI API", "LangChain", "Agentic AI"],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <main className="relative bg-background text-foreground antialiased">
      <LoadingScreen />
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <ExperienceJourney />
      <TechStack />
      <Certifications />
      <Achievements />
      <Education />
      <WhyHireMe />
      <Contact />
      <Footer />
    </main>
  );
}
