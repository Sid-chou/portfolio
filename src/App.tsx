import { useState, useEffect } from 'react';
import { fetchGitHubStats } from './utils/github';
import { getRecentlyPlayed } from './utils/spotify';
import { config } from './config';
import { GitHubCalendar } from 'react-github-calendar';
import { FaXTwitter, FaLinkedinIn, FaGithub, FaYoutube, FaInstagram, FaPinterestP } from "react-icons/fa6";
import { Play, Pause } from "lucide-react";
import { FaSpotify } from "react-icons/fa";
import { section } from 'motion/react-client';

const socialLinks = [
  { label: "Twitter / X", href: "https://x.com/louis3995984693", icon: <FaXTwitter size={18} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sidhant-choudhury-169b442b1/", icon: <FaLinkedinIn size={18} /> },
  { label: "GitHub", href: "https://github.com/Sid-chou", icon: <FaGithub size={18} /> },
  { label: "YouTube", href: "https://youtube.com/@yourchannel", icon: <FaYoutube size={18} /> },
  { label: "Instagram", href: "https://www.instagram.com/mainly.sid/", icon: <FaInstagram size={18} /> },
  { label: "Pinterest", href: "https://in.pinterest.com/sidchoudhury16/", icon: <FaPinterestP size={18} /> },
];
export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="w-full max-w-[760px] mx-auto px-6">
          <Hero />
          <Projects />
          <Experience />
          <About />
          <GithubActivity />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent h-20 flex items-center">
      <div className="w-full max-w-[760px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="relative w-8 h-8 rounded-full bg-[#ffd700] overflow-hidden flex items-center justify-center border border-[#ffd700]/20">
            <img
              alt="Small Avatar"
              className="w-full h-full object-cover opacity-90 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDET9fPwtzRTk29Obqk639yLDVq8Jx3w7fLFH909T7Yby8IZ28PdiLl4agNCn7SJysrxTuUVs1vomQvJiyCECuV1TP5_kqlHpHdrsYwd_JgnoxX-GwBZ6cm_TOT7mgPKN07tZ-IMgcqJRizRJ6U_JilF9TBaorxS-8OcdIuqNuKQ5JsKszUooywa_q8jMqRu49KvZ-KXyKgy74tGy58X9FkOxlwvwYuIei5viqQjkBRXaux1bQn6uF4istlINHgtNFXnTL2yNaNYtc"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex items-center space-x-6">
            <a className="text-[14px] font-sans font-medium text-white hover:text-gray-300 transition-colors" href="#work">Work</a>
            <a className="text-[14px] font-sans font-medium text-white hover:text-gray-300 transition-colors" href="#projects">Projects</a>
            <a className="text-[14px] font-sans font-medium text-white hover:text-gray-300 transition-colors" href="#about">About</a>
            <a className="text-[14px] font-sans font-medium text-white hover:text-gray-300 transition-colors" href="#contact">Contact</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] border border-[#333] rounded-md text-xs text-muted hover:border-gray-600 transition-colors">
            <span className="material-symbols-outlined text-[16px]">search</span>
            <span>Search</span>
            <span className="bg-[#333] px-1.5 py-0.5 rounded text-[10px] text-gray-400">Ctrl K</span>
          </button>
          <button className="text-muted hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[20px]">dark_mode</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  const [track, setTrack] = useState<{ name: string; artist: string; albumArt: string; trackUrl: string; trackId: string } | null>(null);
  const [showEmbed, setShowEmbed] = useState(false);

  useEffect(() => {
    getRecentlyPlayed().then(setTrack);
  }, []);

  return (
    <section className="w-full mb-24 flex flex-col items-start text-left">
      {/* Avatar with green "online" dot */}
      <div className="mb-3 relative group">
        <div className="w-20 h-20 rounded-full bg-[#ffd700] overflow-hidden relative shadow-lg shadow-[#ffd700]/10 ring-4 ring-black">
          <img
            alt="Avatar"
            className="w-full h-full object-cover mix-blend-multiply"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDET9fPwtzRTk29Obqk639yLDVq8Jx3w7fLFH909T7Yby8IZ28PdiLl4agNCn7SJysrxTuUVs1vomQvJiyCECuV1TP5_kqlHpHdrsYwd_JgnoxX-GwBZ6cm_TOT7mgPKN07tZ-IMgcqJRizRJ6U_JilF9TBaorxS-8OcdIuqNuKQ5JsKszUooywa_q8jMqRu49KvZ-KXyKgy74tGy58X9FkOxlwvwYuIei5viqQjkBRXaux1bQn6uF4istlINHgtNFXnTL2yNaNYtc"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background z-10"></div>
      </div>

      {/* Headings */}
      <div className="mb-2">
        <h1 className="font-sans font-bold text-white text-[44px] leading-tight tracking-tight">
          Hi, I'm Sidhant —
        </h1>
        <h2 className="font-sans font-medium text-muted text-[44px] leading-tight tracking-tight">
          A Frontend Developer.
        </h2>
      </div>

      {/* Description with inline tech badges */}
      <div className="max-w-xl mb-4">
        <p className="text-muted text-[16px] leading-relaxed font-sans">
          I build interactive web apps using{' '}
          <span className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 mx-1 bg-[#1a1a1a] border border-white/10 text-xs text-gray-300 font-medium rounded hover:border-white/30 transition-colors cursor-default select-none -translate-y-[1px]">
            <i className="devicon-react-original text-[#61dafb] text-[14px]"></i> React
          </span>,{' '}
          <span className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 mx-1 bg-[#1a1a1a] border border-white/10 text-xs text-gray-300 font-medium rounded hover:border-white/30 transition-colors cursor-default select-none -translate-y-[1px]">
            <i className="devicon-spring-plain text-[#6db33f] text-[14px]"></i> Spring
          </span> and{' '}
          <span className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 mx-1 bg-[#1a1a1a] border border-white/10 text-xs text-gray-300 font-medium rounded hover:border-white/30 transition-colors cursor-default select-none -translate-y-[1px]">
            <i className="devicon-mongodb-plain text-[#47a248] text-[14px]"></i> MongoDB
          </span>. With a focus in UI design. Enthusiastic in{' '}
          <span className="inline-flex items-center align-middle gap-1.5 px-2 py-0.5 mx-1 bg-[#1a1a1a] border border-white/10 text-xs text-gray-300 font-medium rounded hover:border-white/30 transition-colors cursor-default select-none -translate-y-[1px]">
            <i className="devicon-java-plain text-[#f89820] text-[14px]"></i> Java
          </span> development.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        <a className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111] border border-white/20 text-white font-sans text-[14px] font-medium rounded-lg hover:bg-white hover:text-black transition-all hover:border-white group" href="#">
          <span className="material-symbols-outlined text-[18px] group-hover:text-black text-gray-400">description</span>
          Resume / CV
        </a>
        <a className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111] border border-white/20 text-white font-sans text-[14px] font-medium rounded-lg hover:bg-white hover:text-black transition-all hover:border-white group" href="#contact">
          <span className="material-symbols-outlined text-[18px] group-hover:text-black text-gray-400">mail</span>
          Get in Touch
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-5 mb-8">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-gray-500 hover:text-white transition-colors duration-150"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Spotify widget */}
      <div className="w-full mt-4 bg-[#111111] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors">
        {/* Top card row */}
        <div className="p-4 flex items-center gap-4">
          {/* Album Art */}
          <div className="w-12 h-12 flex-shrink-0 rounded-md overflow-hidden bg-[#1ed760]/10 flex items-center justify-center">
            {track?.albumArt
              ? <img src={track.albumArt} alt="Album art" className="w-full h-full object-cover" />
              : <span className="text-[#1ed760] inline-flex"><FaSpotify size={24} /></span>
            }
          </div>

          {/* Track Info */}
          <div className="flex-grow min-w-0">
            <p className="text-[11px] uppercase tracking-wider text-gray-500 mb-0.5 font-medium">
              {showEmbed ? "Now Playing" : "Last Played on Spotify"}
            </p>
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="text-sm font-medium text-gray-200 truncate">
                {track?.name || "Loading..."}
              </span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500 truncate">
                {track?.artist || ""}
              </span>
            </div>
          </div>

          {/* Play/Pause toggle */}
          <button
            onClick={() => setShowEmbed(prev => !prev)}
            aria-label={showEmbed ? "Hide player" : "Play"}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex-shrink-0"
          >
            {showEmbed ? <Pause size={14} /> : <Play size={14} />}
          </button>

          {/* Spotify external link */}
          <a
            href={track?.trackUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            title="Open in Spotify"
            className="flex-shrink-0"
          >
            <span className="text-[#1ed760] hover:scale-110 transition-transform inline-flex">
              <FaSpotify size={18} />
            </span>
          </a>
        </div>

        {/* Embed — shows when play is clicked */}
        {showEmbed && track?.trackId && (
          <iframe
            src={`https://open.spotify.com/embed/track/${track.trackId}?utm_source=generator&theme=0`}
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="border-t border-white/10"
          />
        )}
      </div>
    </section>
  );
}
/* ─── Projects ─── */
function Projects() {
  const projects = [
    {
      title: "NotesBuddy",
      desc: "AI-powered note taking application that automatically categorizes your thoughts. Features real-time sync and markdown support for developer productivity.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYatOX1IGjhaTrxNVGdCkXKfgao4pXg79zFnwbbMI5N6Uhl3Z564kHOoT_FhZlrB1cn3ESaH_ILYJpVJArz8AJRjOPhFNG_0BL3xbtpKItSFRgKFl5XNOku0fG6HJrjVwyEXK-suvoU45mFH7TMJkqCJ62YwnNfwUE5KFr11Tg7bct4ks-xZF_LmvZbLFFKHp2O1lrkBpJhzkOMROZpTGH-rCfif5Mrk_pKZYY05vW016gV9HxTh412PeN6Ex_Vp7FagU6oR-qup4",
      gradient: "from-indigo-900/40 via-purple-900/40 to-pink-900/20",
      tech: [
        { icon: "devicon-nextjs-original", color: "text-white", name: "Next.js" },
        { icon: "devicon-typescript-plain", color: "text-[#3178c6]", name: "TypeScript" },
        { icon: "devicon-tailwindcss-original", color: "text-[#38bdf8]", name: "Tailwind" },
        { icon: "devicon-prisma-original", color: "text-white", name: "Prisma" },
      ],
      status: "operational",
    },
    {
      title: "Appwrite MCP Server",
      desc: "A custom Model Context Protocol server implementation for Appwrite, enabling LLMs to directly interact with your Appwrite database and functions securely.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh60At3NHnzPmTlG7GlD-w7VEqZadH9A0y7x9pmdEfdcIpbm7UTQkK6izA7JhSQC0Aqy39ddkfsjHpH4UiO6fsH35eXZvIJ6pkHOLoPv2NhjdjnXkt11m5QU5sEqXcaVKbvaB5r1Y2BKDjfxYJYPegaxQGqEUkWzCQtzvKhgzxt8ueETDGFd6hfXMxiY7nOKRVL8n8xi1IvPqd_hE-MzwFLbPJz_nylLBSKpoH0acABy3-nVtIjurzsh-pZwya8FwzU44_TZSDr2M",
      gradient: "from-pink-900/40 via-red-900/40 to-orange-900/20",
      tech: [
        { icon: "devicon-nodejs-plain", color: "text-[#339933]", name: "Node.js" },
        { icon: "devicon-appwrite-plain", color: "text-[#f02e65]", name: "Appwrite" },
        { icon: "devicon-docker-plain", color: "text-[#2496ed]", name: "Docker" },
      ],
      status: "operational",
    },
    {
      title: "Syncify",
      desc: "Real-time collaborative whiteboard for remote teams. Features infinite canvas, shape recognition, and live cursor tracking for up to 50 users.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYatOX1IGjhaTrxNVGdCkXKfgao4pXg79zFnwbbMI5N6Uhl3Z564kHOoT_FhZlrB1cn3ESaH_ILYJpVJArz8AJRjOPhFNG_0BL3xbtpKItSFRgKFl5XNOku0fG6HJrjVwyEXK-suvoU45mFH7TMJkqCJ62YwnNfwUE5KFr11Tg7bct4ks-xZF_LmvZbLFFKHp2O1lrkBpJhzkOMROZpTGH-rCfif5Mrk_pKZYY05vW016gV9HxTh412PeN6Ex_Vp7FagU6oR-qup4",
      gradient: "from-cyan-900/40 via-blue-900/40 to-purple-900/20",
      tech: [
        { icon: "devicon-react-original", color: "text-[#61dafb]", name: "React" },
        { icon: "devicon-socketio-original", color: "text-white", name: "Socket.io" },
        { icon: "devicon-redux-original", color: "text-[#764abc]", name: "Redux" },
      ],
      status: "operational",
      previewUnavailable: true,
    },
    {
      title: "Pasandida Aurat",
      desc: "A cultural storytelling platform dedicated to South Asian narratives. Focused on immersive reading experiences with subtle parallax effects.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDET9fPwtzRTk29Obqk639yLDVq8Jx3w7fLFH909T7Yby8IZ28PdiLl4agNCn7SJysrxTuUVs1vomQvJiyCECuV1TP5_kqlHpHdrsYwd_JgnoxX-GwBZ6cm_TOT7mgPKN07tZ-IMgcqJRizRJ6U_JilF9TBaorxS-8OcdIuqNuKQ5JsKszUooywa_q8jMqRu49KvZ-KXyKgy74tGy58X9FkOxlwvwYuIei5viqQjkBRXaux1bQn6uF4istlINHgtNFXnTL2yNaNYtc",
      gradient: "from-amber-900/40 via-orange-900/40 to-yellow-900/20",
      tech: [
        { icon: "devicon-vuejs-plain", color: "text-[#4fc08d]", name: "Vue.js" },
        { icon: "devicon-nuxtjs-plain", color: "text-white", name: "Nuxt" },
        { icon: "devicon-sass-original", color: "text-[#cc6699]", name: "Sass" },
      ],
      status: "building",
    },
  ];

  return (
    <section className="w-full mb-120 py-16" id="projects">
      <div className="mb-10 text-left">
        <span className="block text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-gray-500 mb-2">Featured</span>
        <h2 className="text-3xl font-sans font-bold text-white tracking-tight">## Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <article key={index} className="bg-sleek-card rounded-xl border border-white/10 overflow-hidden flex flex-col group h-full hover:border-white/20 transition-colors duration-300">
            {/* Image */}
            <div className={`h-[200px] w-full relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
              {project.previewUnavailable && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-sans text-xs uppercase tracking-widest z-10">Preview Unavailable</div>
              )}
              <img
                alt={project.title}
                className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${project.previewUnavailable ? 'opacity-30' : 'opacity-90'}`}
                src={project.img}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#111118] to-transparent"></div>
            </div>
            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[18px] font-bold text-white font-sans">{project.title}</h3>
                <div className="flex gap-3">
                  <a className="text-gray-500 hover:text-white transition-colors" href="#">
                    <span className="material-symbols-outlined text-[20px]">language</span>
                  </a>
                  <a className="text-gray-500 hover:text-white transition-colors" href="#">
                    <i className="devicon-github-original text-[18px]"></i>
                  </a>
                </div>
              </div>
              <p className="text-[13px] text-gray-400 font-sans leading-relaxed mb-6 line-clamp-2">{project.desc}</p>
              <div className="mt-auto">
                <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-2 font-sans">Technologies</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <i key={i} className={`${t.icon} text-[20px] ${t.color}`} title={t.name}></i>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${project.status === 'building' ? 'animate-pulse bg-red-500' : 'animate-ping bg-green-400'}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${project.status === 'building' ? 'bg-red-600' : 'bg-green-500'}`}></span>
                    </span>
                    <span className="text-[12px] text-gray-400 font-sans">
                      {project.status === 'building' ? 'Building' : 'All Systems Operational'}
                    </span>
                  </div>
                  <a className="text-[12px] text-gray-500 hover:text-white transition-colors font-sans flex items-center gap-1 group-hover:translate-x-1 duration-200" href="#">
                    View Details <span className="text-xs">→</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-right">
        <a className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors group" href="#">
          Show all projects <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
}

/* ─── Experience ─── */
function Experience() {
  return (
    <section className="w-full mb-120" id="work">
      <div className="flex items-center gap-4 mb-16">
        <h3 className="font-pixel text-sm text-primary tracking-widest uppercase whitespace-nowrap">
          // EXPERIENCE_LOG
        </h3>
        <div className="h-px bg-gray-800 w-full"></div>
      </div>
      <div className="space-y-6">
        {/* Job 1 */}
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

        {/* Job 2 */}
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

/* ─── About ─── */
function About() {
  return (
    <section className="w-full mb-120" id="about">
      <div className="flex items-center gap-4 mb-16">
        <h3 className="font-pixel text-sm text-primary tracking-widest uppercase">
          // ME
        </h3>
        <div className="h-px bg-gray-800 flex-grow"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-shrink-0">
          <div className="w-[200px] h-[200px] rounded-full bg-gray-900 border-4 border-white/10 shadow-glow-yellow overflow-hidden relative">
            <img
              alt="Alex Large Avatar"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDET9fPwtzRTk29Obqk639yLDVq8Jx3w7fLFH909T7Yby8IZ28PdiLl4agNCn7SJysrxTuUVs1vomQvJiyCECuV1TP5_kqlHpHdrsYwd_JgnoxX-GwBZ6cm_TOT7mgPKN07tZ-IMgcqJRizRJ6U_JilF9TBaorxS-8OcdIuqNuKQ5JsKszUooywa_q8jMqRu49KvZ-KXyKgy74tGy58X9FkOxlwvwYuIei5viqQjkBRXaux1bQn6uF4istlINHgtNFXnTL2yNaNYtc"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-3xl font-bold text-white mb-6 font-sans">Alex Dev.</h3>
          <div className="text-gray-400 text-lg leading-relaxed space-y-4 mb-8">
            <p>I am a digital craftsman focused on the intersection of design and engineering. With a background in traditional art, I approach every line of code as a brushstroke on a digital canvas.</p>
            <p>When I'm not coding, you can find me exploring retro game mechanics, brewing specialty coffee, or contributing to open source projects.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="border border-gray-700 bg-[#111111] px-4 py-2 flex items-center gap-2">
              <i className="devicon-react-original text-xl text-[#61dafb]"></i>
              <span className="font-sans font-medium text-sm text-white">React</span>
            </div>
            <div className="border border-gray-700 bg-[#111111] px-4 py-2 flex items-center gap-2">
              <i className="devicon-spring-plain text-xl text-green-500"></i>
              <span className="font-sans font-medium text-sm text-white">Spring Boot</span>
            </div>
            <div className="border border-gray-700 bg-[#111111] px-4 py-2 flex items-center gap-2">
              <i className="devicon-javascript-plain text-xl text-yellow-400"></i>
              <span className="font-sans font-medium text-sm text-white">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── GitHub Activity (REAL DATA via react-github-calendar) ─── */
function GithubActivity() {
  const [stats, setStats] = useState({ repos: 0, followers: 0, stars: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const statsData = await fetchGitHubStats();
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

  const githubTheme = {
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
  };

  return (
    <section className="w-full mb-120">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="font-pixel text-sm text-primary tracking-widest uppercase">
          // GITHUB_ACTIVITY
        </h3>
        <div className="h-px bg-gray-800 flex-grow"></div>
      </div>
      <div className="w-full bg-[#0d1117] border border-[#30363d] rounded-md p-6 md:p-8">
        {/* Real GitHub Contribution Calendar */}
        <div className="mb-6 w-full overflow-x-auto">
          <GitHubCalendar
            username={config.github.username}
            colorScheme="dark"
            theme={githubTheme}
            fontSize={12}
            blockSize={13}
            blockMargin={3}
            blockRadius={2}
            labels={{
              totalCount: '{{count}} contributions in the last year',
            }}
            style={{ width: '100%' }}
          />
        </div>
        <div className="text-center mb-6">
          <a
            href={`https://github.com/${config.github.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#58a6ff] hover:underline transition-colors"
          >
            @{config.github.username}
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 pt-4 border-t border-[#30363d]">
          <div className="flex items-center gap-3">
            <span className="text-[#8b949e] uppercase text-xs font-pixel tracking-wider">Public Repos</span>
            <span className="text-[#c9d1d9] font-code text-xl bg-[#161b22] px-3 py-1 border border-[#30363d] rounded-md">
              {loading ? '...' : stats.repos}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#8b949e] uppercase text-xs font-pixel tracking-wider">Stars Earned</span>
            <span className="text-[#c9d1d9] font-code text-xl bg-[#161b22] px-3 py-1 border border-[#30363d] rounded-md">
              {loading ? '...' : stats.stars}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#8b949e] uppercase text-xs font-pixel tracking-wider">Followers</span>
            <span className="text-[#c9d1d9] font-code text-xl bg-[#161b22] px-3 py-1 border border-[#30363d] rounded-md">
              {loading ? '...' : stats.followers}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  return (
    <section className="w-full mb-24 relative" id="contact">
      <div className="w-full text-center">
        <div className="mb-12">
          <p className="font-pixel text-gray-500 mb-6 tracking-widest text-xs uppercase">Save_Point</p>
          <h3 className="font-sans font-bold text-4xl md:text-5xl text-white">Let's Talk.</h3>
        </div>
        <form className="w-full space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
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
          <a className="group w-10 h-10 border border-gray-700 flex items-center justify-center bg-[#1a1a2e] hover:border-primary transition-colors" href="#">
            <i className="devicon-twitter-original text-gray-500 group-hover:text-primary transition-colors"></i>
          </a>
          <a className="group w-10 h-10 border border-gray-700 flex items-center justify-center bg-[#1a1a2e] hover:border-primary transition-colors" href="#">
            <i className="devicon-linkedin-plain text-gray-500 group-hover:text-primary transition-colors"></i>
          </a>
          <a className="group w-10 h-10 border border-gray-700 flex items-center justify-center bg-[#1a1a2e] hover:border-primary transition-colors" href="#">
            <i className="devicon-github-original text-gray-500 group-hover:text-primary transition-colors"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-background text-center relative overflow-hidden">
      <div className="w-full flex flex-col items-center gap-4">
        <p className="font-pixel text-[10px] text-gray-600 uppercase tracking-widest animate-pulse">
          Press Start to Continue...
        </p>
        <div className="flex items-center gap-6 text-gray-500">
          <span className="text-xs font-sans">© 2023 Alex Portfolio</span>
          <div className="flex space-x-4">
            <a className="hover:text-primary transition-colors text-lg" href="#"><i className="devicon-twitter-original"></i></a>
            <a className="hover:text-primary transition-colors text-lg" href="#"><i className="devicon-github-original"></i></a>
            <a className="hover:text-primary transition-colors text-lg" href="#"><i className="devicon-linkedin-plain"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
