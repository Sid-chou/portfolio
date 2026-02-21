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
