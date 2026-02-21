import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import GithubActivity from './components/GithubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // isDark lives here — single source of truth
  const [isDark, setIsDark] = useState(true);

  // Read saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  // Toggle theme — passed to Navbar
  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      {/* Navbar — full width, outside main container */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* adding the blur effect */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none"
        style={{
          height: "40px",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          // Gradient fade — transparent at top, solid at bottom
          maskImage: "linear-gradient(to bottom, transparent, black)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
          background: isDark
            ? "rgba(10, 10, 10, 0.4)"
            : "rgba(255, 255, 242, 0.4)",
        }}
      />

      {/* All sections — 760px centered container */}
      <main className="pt-[68px] pb-24">
        <div className="w-full max-w-[760px] mx-auto px-6">
          <Hero isDark={isDark} />
          <Projects isDark={isDark} />
          <Experience isDark={isDark} />
          <About isDark={isDark} />
          <GithubActivity isDark={isDark} />
          <Contact isDark={isDark} />
          <Footer isDark={isDark} />
        </div>
      </main>
    </>
  );
}
