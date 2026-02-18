import { useState, useEffect } from 'react';

export default function App() {
  return (
    <>
      <Navbar />
      <main class="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/5 h-20 flex items-center">
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="font-pixel text-xs tracking-tight text-white hover:text-primary cursor-pointer">
          hi i m alex
        </div>
        <div className="flex items-center space-x-8 hidden md:flex">
          <a href="#work" className="text-[13px] font-sans font-medium uppercase tracking-wide hover:text-primary transition-colors text-gray-300">WORK</a>
          <a href="#projects" className="text-[13px] font-sans font-medium uppercase tracking-wide hover:text-primary transition-colors text-gray-300">PROJECTS</a>
          <a href="#about" className="text-[13px] font-sans font-medium uppercase tracking-wide hover:text-primary transition-colors text-gray-300">ABOUT</a>
          <a href="#contact" className="text-[13px] font-sans font-medium uppercase tracking-wide hover:text-primary transition-colors text-gray-300">CONTACT</a>
        </div>
        {/* Mobile Menu Icon Placeholder - could add functionality if needed, but sticking to design */}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative mb-32">
      <div className="mb-8 relative">
        <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-white shadow-glow-yellow overflow-hidden relative mx-auto">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDET9fPwtzRTk29Obqk639yLDVq8Jx3w7fLFH909T7Yby8IZ28PdiLl4agNCn7SJysrxTuUVs1vomQvJiyCECuV1TP5_kqlHpHdrsYwd_JgnoxX-GwBZ6cm_TOT7mgPKN07tZ-IMgcqJRizRJ6U_JilF9TBaorxS-8OcdIuqNuKQ5JsKszUooywa_q8jMqRu49KvZ-KXyKgy74tGy58X9FkOxlwvwYuIei5viqQjkBRXaux1bQn6uF4istlINHgtNFXnTL2yNaNYtc"
            alt="Alex Avatar"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <h1 className="font-sans font-bold text-white text-5xl md:text-[52px] leading-tight mb-2">
        Hi, I'm Alex —
      </h1>
      <h2 className="font-sans font-bold text-gray-500 text-5xl md:text-[52px] leading-tight mb-8">
        A Frontend Developer.
      </h2>
      <div className="max-w-2xl mb-10 mx-auto">
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          I build accessible, pixel-perfect, and performant web applications. Passionate about blending retro aesthetics with modern UI architecture.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a1a2e] border border-gray-700 text-sm text-gray-300 font-medium rounded-none hover:border-primary transition-colors cursor-default">
            <i className="devicon-typescript-plain text-[#3178c6]"></i> TypeScript
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a1a2e] border border-gray-700 text-sm text-gray-300 font-medium rounded-none hover:border-primary transition-colors cursor-default">
            <i className="devicon-react-original text-[#61dafb]"></i> React
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a1a2e] border border-gray-700 text-sm text-gray-300 font-medium rounded-none hover:border-primary transition-colors cursor-default">
            <i className="devicon-nextjs-original text-white"></i> Next.js
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a1a2e] border border-gray-700 text-sm text-gray-300 font-medium rounded-none hover:border-primary transition-colors cursor-default">
            <i className="devicon-tailwindcss-original text-[#38bdf8]"></i> Tailwind
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mb-12 justify-center">
        <a href="#" className="px-8 py-3.5 bg-transparent border border-white text-white font-sans text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-all shadow-pixel-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
          Resume / CV
        </a>
        <a href="#contact" className="px-8 py-3.5 bg-transparent border border-white text-white font-sans text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-all shadow-pixel-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
          Get in Touch
        </a>
      </div>
      <div className="flex items-center gap-6 justify-center">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <i className="devicon-twitter-original text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <i className="devicon-linkedin-plain text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <i className="devicon-github-original text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <i className="devicon-pinterest-plain text-xl"></i>
        </a>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Neon Analytics",
      desc: "Real-time data visualization dashboard with dark mode support.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYatOX1IGjhaTrxNVGdCkXKfgao4pXg79zFnwbbMI5N6Uhl3Z564kHOoT_FhZlrB1cn3ESaH_ILYJpVJArz8AJRjOPhFNG_0BL3xbtpKItSFRgKFl5XNOku0fG6HJrjVwyEXK-suvoU45mFH7TMJkqCJ62YwnNfwUE5KFr11Tg7bct4ks-xZF_LmvZbLFFKHp2O1lrkBpJhzkOMROZpTGH-rCfif5Mrk_pKZYY05vW016gV9HxTh412PeN6Ex_Vp7FagU6oR-qup4"
    },
    {
      title: "Pixel Editor",
      desc: "Browser-based sprite editor for game devs with layer support.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh60At3NHnzPmTlG7GlD-w7VEqZadH9A0y7x9pmdEfdcIpbm7UTQkK6izA7JhSQC0Aqy39ddkfsjHpH4UiO6fsH35eXZvIJ6pkHOLoPv2NhjdjnXkt11m5QU5sEqXcaVKbvaB5r1Y2BKDjfxYJYPegaxQGqEUkWzCQtzvKhgzxt8ueETDGFd6hfXMxiY7nOKRVL8n8xi1IvPqd_hE-MzwFLbPJz_nylLBSKpoH0acABy3-nVtIjurzsh-pZwya8FwzU44_TZSDr2M"
    },
    {
      title: "Retro Chat",
      desc: "Websocket powered chat app with IRC style commands.",
      noSignal: true
    },
    {
      title: "Crypto Folio",
      desc: "Minimalist cryptocurrency tracker using CoinGecko API.",
      noSignal: true
    }
  ];

  return (
    <section id="projects" className="mb-32">
      <div className="flex items-center gap-4 mb-16">
        <h3 className="font-pixel text-sm text-primary tracking-widest uppercase">
          // LATEST_QUESTS
        </h3>
        <div className="h-px bg-gray-800 flex-grow"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {projects.map((project, index) => (
          <article key={index} className="slanted-card bg-[#111111] border border-gray-800 shadow-pixel-card p-4 transition-all duration-300 flex flex-col h-full group">
            <div className="aspect-video bg-gray-900 mb-4 overflow-hidden border border-gray-800 relative group-hover:border-primary/50 transition-colors">
              {project.img ? (
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-pixel text-[10px]">NO_SIGNAL</div>
              )}
            </div>
            <h4 className="font-sans font-bold text-lg text-white mb-2">{project.title}</h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-grow">{project.desc}</p>
            <div className="flex gap-3 mt-auto">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg">open_in_new</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <i className="devicon-github-original text-lg"></i>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="work" className="mb-32">
      <div className="flex items-center gap-4 mb-16">
        <h3 className="font-pixel text-sm text-primary tracking-widest uppercase whitespace-nowrap">
          // EXPERIENCE_LOG
        </h3>
        <div className="h-px bg-gray-800 w-full"></div>
      </div>
      <div className="space-y-6">
        <div className="w-full bg-[#111111] border border-gray-800 p-8 flex flex-col md:flex-row gap-8 items-start hover:border-gray-600 transition-colors">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-[#1a1a2e] border border-gray-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-xl">terminal</span>
            </div>
          </div>
          <div className="flex-grow w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h4 className="text-xl font-bold text-white font-sans">Senior Frontend Engineer</h4>
                <p className="text-gray-400 text-sm mt-1">TechCorp Solutions</p>
              </div>
              <span className="font-code text-primary text-lg mt-2 md:mt-0">2021 - PRESENT</span>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-400 text-sm pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-primary before:font-pixel before:text-[10px] before:top-1">
                Spearheaded migration of legacy jQuery app to React, improving load times by 40%.
              </li>
              <li className="text-gray-400 text-sm pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-primary before:font-pixel before:text-[10px] before:top-1">
                Developed a shared component library used across 5 distinct products.
              </li>
              <li className="text-gray-400 text-sm pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-primary before:font-pixel before:text-[10px] before:top-1">
                Mentored 3 junior developers through code reviews and pair programming.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-[11px] font-sans border border-gray-800 text-gray-500 rounded-sm">React</span>
              <span className="px-2 py-1 text-[11px] font-sans border border-gray-800 text-gray-500 rounded-sm">Redux</span>
              <span className="px-2 py-1 text-[11px] font-sans border border-gray-800 text-gray-500 rounded-sm">TypeScript</span>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#111111] border border-gray-800 p-8 flex flex-col md:flex-row gap-8 items-start hover:border-gray-600 transition-colors">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-[#1a1a2e] border border-gray-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-xl">code</span>
            </div>
          </div>
          <div className="flex-grow w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h4 className="text-xl font-bold text-white font-sans">Web Developer</h4>
                <p className="text-gray-400 text-sm mt-1">Creative Agency Inc.</p>
              </div>
              <span className="font-code text-primary text-lg mt-2 md:mt-0">2019 - 2021</span>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-400 text-sm pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-primary before:font-pixel before:text-[10px] before:top-1">
                Built responsive landing pages for over 15 clients with pixel-perfect precision.
              </li>
              <li className="text-gray-400 text-sm pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-primary before:font-pixel before:text-[10px] before:top-1">
                Collaborated with designers to implement complex animations using GSAP.
              </li>
              <li className="text-gray-400 text-sm pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-primary before:font-pixel before:text-[10px] before:top-1">
                Optimized assets achieving 95+ lighthouse scores on performance.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-[11px] font-sans border border-gray-800 text-gray-500 rounded-sm">HTML/SCSS</span>
              <span className="px-2 py-1 text-[11px] font-sans border border-gray-800 text-gray-500 rounded-sm">JavaScript</span>
              <span className="px-2 py-1 text-[11px] font-sans border border-gray-800 text-gray-500 rounded-sm">WordPress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mb-32">
      <div className="flex items-center gap-4 mb-16">
        <h3 className="font-pixel text-sm text-primary tracking-widest uppercase">
          // ME
        </h3>
        <div className="h-px bg-gray-800 flex-grow"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <div className="w-[280px] h-[280px] rounded-full bg-gray-900 border-4 border-white/10 shadow-glow-yellow overflow-hidden relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDET9fPwtzRTk29Obqk639yLDVq8Jx3w7fLFH909T7Yby8IZ28PdiLl4agNCn7SJysrxTuUVs1vomQvJiyCECuV1TP5_kqlHpHdrsYwd_JgnoxX-GwBZ6cm_TOT7mgPKN07tZ-IMgcqJRizRJ6U_JilF9TBaorxS-8OcdIuqNuKQ5JsKszUooywa_q8jMqRu49KvZ-KXyKgy74tGy58X9FkOxlwvwYuIei5viqQjkBRXaux1bQn6uF4istlINHgtNFXnTL2yNaNYtc"
              alt="Alex Large Avatar"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="md:col-span-8">
          <h3 className="text-4xl font-bold text-white mb-6 font-sans">Alex Dev.</h3>
          <div className="text-gray-400 text-lg leading-relaxed space-y-4 mb-8">
            <p>I am a digital craftsman focused on the intersection of design and engineering. With a background in traditional art, I approach every line of code as a brushstroke on a digital canvas.</p>
            <p>When I'm not coding, you can find me exploring retro game mechanics, brewing specialty coffee, or contributing to open source projects.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="border border-gray-700 bg-[#111111] px-6 py-3 flex items-center gap-3">
              <i className="devicon-react-original text-2xl text-[#61dafb]"></i>
              <span className="font-sans font-semibold text-white">React</span>
            </div>
            <div className="border border-gray-700 bg-[#111111] px-6 py-3 flex items-center gap-3">
              <i className="devicon-spring-plain text-2xl text-green-500"></i>
              <span className="font-sans font-semibold text-white">Spring Boot</span>
            </div>
            <div className="border border-gray-700 bg-[#111111] px-6 py-3 flex items-center gap-3">
              <i className="devicon-javascript-plain text-2xl text-yellow-400"></i>
              <span className="font-sans font-semibold text-white">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { fetchGitHubActivity, fetchGitHubStats } from './utils/github';
import { config } from './config';

function GithubActivity() {
  const [cells, setCells] = useState<number[]>([]);
  const [stats, setStats] = useState({ repos: 0, followers: 0, stars: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [activityData, statsData] = await Promise.all([
          fetchGitHubActivity(),
          fetchGitHubStats()
        ]);
        setCells(activityData);
        setStats({
          repos: statsData.repos,
          followers: statsData.followers,
          stars: statsData.stars
        });
      } catch (error) {
        console.error("Failed to load GitHub data", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <section className="mb-32">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="font-pixel text-sm text-primary tracking-widest uppercase">
          // GITHUB_ACTIVITY ({config.github.username})
        </h3>
        <div className="h-px bg-gray-800 flex-grow"></div>
      </div>
      <div className="w-full bg-[#0a0a12] border border-gray-800 p-6 md:p-8">
        <div className="heatmap-grid mb-8 w-full overflow-hidden min-h-[100px] flex items-center justify-center relative">
          {loading ? (
            <div className="font-pixel text-xs text-primary animate-pulse">LOADING_DATA...</div>
          ) : (
            <div className="heatmap-grid w-full"> {/* Re-add grid container for cells */}
              {cells.map((opacity, i) => {
                let colorClass = 'bg-gray-800';
                if (opacity > 0.9) colorClass = 'bg-green-500';
                else if (opacity > 0.6) colorClass = 'bg-green-700';
                else if (opacity > 0.3) colorClass = 'bg-green-900';
                // Use inline style for opacity if needed, or just classes. 
                // Original code used threshold classes.
                return <div key={i} className={`heatmap-cell ${colorClass}`} title={`Activity Level: ${opacity.toFixed(1)}`}></div>
              })}
            </div>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 pt-4 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <span className="text-gray-500 uppercase text-xs font-pixel tracking-wider">Public Repos</span>
            <span className="text-white font-code text-xl bg-gray-900 px-3 py-1 border border-gray-700 rounded-sm">
              {loading ? '...' : stats.repos}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 uppercase text-xs font-pixel tracking-wider">Stars Earned</span>
            <span className="text-white font-code text-xl bg-gray-900 px-3 py-1 border border-gray-700 rounded-sm">
              {loading ? '...' : stats.stars}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 uppercase text-xs font-pixel tracking-wider">Followers</span>
            <span className="text-white font-code text-xl bg-gray-900 px-3 py-1 border border-gray-700 rounded-sm">
              {loading ? '...' : stats.followers}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mb-24 relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-12">
          <p className="font-pixel text-gray-500 mb-6 tracking-widest text-xs uppercase">Save_Point</p>
          <h3 className="font-sans font-bold text-4xl md:text-5xl text-white">Let's Talk.</h3>
        </div>
        <form className="max-w-[560px] mx-auto space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="sr-only" htmlFor="name">Name</label>
              <input className="w-full bg-[#1a1a2e] border border-gray-700 text-gray-300 placeholder-gray-500 p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-none transition-colors font-sans" id="name" name="name" placeholder="Name" type="text" />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input className="w-full bg-[#1a1a2e] border border-gray-700 text-gray-300 placeholder-gray-500 p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-none transition-colors font-sans" id="email" name="email" placeholder="Email" type="email" />
            </div>
          </div>
          <div>
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea className="w-full bg-[#1a1a2e] border border-gray-700 text-gray-300 placeholder-gray-500 p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-none transition-colors resize-none font-sans" id="message" name="message" placeholder="Your message..." rows={6}></textarea>
          </div>
          <div className="text-center pt-6">
            <button className="inline-block px-10 py-4 bg-gameboy-blue text-white font-pixel text-xs tracking-wider uppercase hover:brightness-110 transition-all shadow-pixel-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]" type="submit">
              Send_Message
            </button>
          </div>
        </form>
        <div className="mt-16 flex justify-center gap-6">
          <a href="#" className="group w-10 h-10 border border-gray-700 flex items-center justify-center bg-[#1a1a2e] hover:border-primary transition-colors">
            <i className="devicon-twitter-original text-gray-500 group-hover:text-primary transition-colors"></i>
          </a>
          <a href="#" className="group w-10 h-10 border border-gray-700 flex items-center justify-center bg-[#1a1a2e] hover:border-primary transition-colors">
            <i className="devicon-linkedin-plain text-gray-500 group-hover:text-primary transition-colors"></i>
          </a>
          <a href="#" className="group w-10 h-10 border border-gray-700 flex items-center justify-center bg-[#1a1a2e] hover:border-primary transition-colors">
            <i className="devicon-github-original text-gray-500 group-hover:text-primary transition-colors"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background text-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
        <p className="font-pixel text-[10px] text-gray-600 uppercase tracking-widest animate-pulse">
          Press Start to Continue...
        </p>
        <div className="flex items-center gap-6 text-gray-500">
          <span className="text-xs font-sans">© 2023 Alex Portfolio</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary transition-colors text-lg"><i className="devicon-twitter-original"></i></a>
            <a href="#" className="hover:text-primary transition-colors text-lg"><i className="devicon-github-original"></i></a>
            <a href="#" className="hover:text-primary transition-colors text-lg"><i className="devicon-linkedin-plain"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
