import { Play } from "lucide-react";
import AnimatedContent from '../../components/AnimatedContent';
import StackIcon from "tech-stack-icons";

type ProjectsProps = {
    isDark: boolean;
};

export default function Projects({ isDark }: ProjectsProps) {
    const projects = [
        {
            title: "Wallet Warrior",
            desc: "A digital inventory system that tracks your real-world purchases and alerts you before their warranties reach game over.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYatOX1IGjhaTrxNVGdCkXKfgao4pXg79zFnwbbMI5N6Uhl3Z564kHOoT_FhZlrB1cn3ESaH_ILYJpVJArz8AJRjOPhFNG_0BL3xbtpKItSFRgKFl5XNOku0fG6HJrjVwyEXK-suvoU45mFH7TMJkqCJ62YwnNfwUE5KFr11Tg7bct4ks-xZF_LmvZbLFFKHp2O1lrkBpJhzkOMROZpTGH-rCfif5Mrk_pKZYY05vW016gV9HxTh412PeN6Ex_Vp7FagU6oR-qup4",
            gradient: "from-indigo-900/40 via-purple-900/40 to-pink-900/20",
            tech: [
                { icon: "nextjs2", name: "Next.js" },
                { icon: "typescript", name: "TypeScript" },
                { icon: "tailwindcss", name: "Tailwind" },
                { icon: "python", name: "Python" },
                { icon: "spring", name: "Spring" },
            ],
            status: "operational",
        },
        {
            title: "Multi-Agent Financial Advisor",
            desc: "Fine-tuned multi-agent AI system that mimics a hedge fund pipeline — specialized agents for sentiment, technical, and fundamental analysis collaborate in parallel to deliver grounded, risk-aware stock recommendations for Indian markets",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh60At3NHnzPmTlG7GlD-w7VEqZadH9A0y7x9pmdEfdcIpbm7UTQkK6izA7JhSQC0Aqy39ddkfsjHpH4UiO6fsH35eXZvIJ6pkHOLoPv2NhjdjnXkt11m5QU5sEqXcaVKbvaB5r1Y2BKDjfxYJYPegaxQGqEUkWzCQtzvKhgzxt8ueETDGFd6hfXMxiY7nOKRVL8n8xi1IvPqd_hE-MzwFLbPJz_nylLBSKpoH0acABy3-nVtIjurzsh-pZwya8FwzU44_TZSDr2M",
            gradient: "from-pink-900/40 via-red-900/40 to-orange-900/20",
            tech: [
                { icon: "spring", name: "Spring" },
                { icon: "python", name: "Python" },
                { icon: "nextjs2", name: "Next.js" },
            ],
            status: "operational",
        },
        {
            title: "DevPulse",
            desc: "A platform that connects to your GitHub, analyzes your coding patterns, predicts burnout risk, and tells you when you're most productive.",
            img: "/assets/download.jfif",
            gradient: "from-cyan-900/40 via-blue-900/40 to-purple-900/20",
            tech: [
                { icon: "nextjs2", name: "Next.js" },
                { icon: "spring", name: "Spring Boot" },
                { icon: "postgresql", name: "PostgreSQL" },
                { icon: "devicon-apachekafka-original", name: "Kafka" },
                { icon: "python", name: "Python" },
            ],
            status: "operational",
        },
        {
            title: "AgentDock",
            desc: "A browser extension that tiles your AI assistants into one floating workspace so you never context-switch again.",
            img: "/assets/p4.png",
            gradient: "from-amber-900/40 via-orange-900/40 to-yellow-900/20",
            tech: [
                { icon: "js", name: "Vanilla JS" },
                { icon: "devicon-chrome-plain", color: "text-[#4285F4]", name: "Chrome APIs" },
                { icon: "tailwindcss", name: "Tailwind CSS" },
            ],
            status: "building",
        },
    ];

    return (
        <section className="w-full mb-8 py-16" id="projects">
            {/* Section heading — clean, theme-aware */}
            <div className="mb-10 text-left">
                <h2
                    className="text-3xl font-sans font-bold tracking-tight"
                    style={{ color: isDark ? "#ffffff" : "#1a1a1a" }}
                >
                    Projects
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <AnimatedContent
                        key={index}
                        distance={60}
                        direction="vertical"
                        reverse={false}
                        duration={0.6}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity={true}
                        scale={1}
                        threshold={0.1}
                        delay={index * 0.1}
                        container={null}
                        onComplete={undefined}
                        onDisappearanceComplete={undefined}
                    >
                        <article
                            className="rounded-xl overflow-hidden flex flex-col h-full transition-colors duration-300"
                            style={{
                                background: isDark ? "#000000" : "#FFFFF2",
                                border: isDark
                                    ? "1px solid rgba(255,255,255,0.08)"
                                    : "1px solid rgba(0,0,0,0.08)",
                            }}
                        >
                            {/* Image with hover play button */}
                            <div className={`relative w-full overflow-hidden group/thumb bg-gradient-to-br ${project.gradient}`} style={{ height: "200px" }}>
                                <img
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transition-all duration-300 group-hover/thumb:blur-sm group-hover/thumb:scale-105 opacity-90"
                                    src={project.img}
                                    referrerPolicy="no-referrer"
                                />
                                {/* Play button overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300">
                                    <div className="w-14 h-14 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                                        <Play size={24} className="text-white ml-1" />
                                    </div>
                                </div>
                                {/* Bottom gradient fade */}

                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-2">
                                    <h3
                                        className="text-[18px] font-bold font-sans"
                                        style={{ color: isDark ? "#ffffff" : "#1a1a1a" }}
                                    >
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        <a className="transition-colors" href="#"
                                            style={{ color: isDark ? "#6b7280" : "#9ca3af" }}>
                                            <span className="material-symbols-outlined text-[20px]">language</span>
                                        </a>
                                        <a className="transition-colors" href="#"
                                            style={{ color: isDark ? "#6b7280" : "#9ca3af" }}>
                                            <i className="devicon-github-original text-[18px]"></i>
                                        </a>
                                    </div>
                                </div>
                                <p
                                    className="text-[13px] font-sans leading-relaxed mb-6 line-clamp-2"
                                    style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
                                >
                                    {project.desc}
                                </p>
                                <div className="mt-auto">
                                    <p
                                        className="text-[11px] font-medium  tracking-wider mb-2 font-sans"
                                        style={{ color: isDark ? "#4b5563" : "#9ca3af" }}
                                    >
                                        Technologies
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t: any, i) => (
                                            <div key={i} title={t.name} className="w-[20px] h-[20px] flex items-center justify-center">
                                                {t.icon.startsWith("devicon-") ? (
                                                    <i className={`${t.icon} text-[20px] ${t.color || (isDark ? 'text-white' : 'text-black')}`}></i>
                                                ) : (
                                                    <StackIcon name={t.icon} className="w-full h-full" variant={isDark ? "light" : "dark"} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div
                                        className="flex items-center justify-between pt-4"
                                        style={{
                                            borderTop: isDark
                                                ? "1px solid rgba(255,255,255,0.05)"
                                                : "1px solid rgba(0,0,0,0.05)",
                                        }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="relative flex h-2 w-2">
                                                <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${project.status === 'building' ? 'animate-pulse bg-red-500' : 'animate-ping bg-green-400'}`}></span>
                                                <span className={`relative inline-flex rounded-full h-2 w-2 ${project.status === 'building' ? 'bg-red-600' : 'bg-green-500'}`}></span>
                                            </span>
                                            <span
                                                className="text-[12px] font-sans"
                                                style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
                                            >
                                                {project.status === 'building' ? 'Building' : 'All Systems Operational'}
                                            </span>
                                        </div>
                                        <a
                                            className="text-[12px] font-sans flex items-center gap-1 hover:translate-x-1 transition-transform duration-200"
                                            href="#"
                                            style={{ color: isDark ? "#6b7280" : "#9ca3af" }}
                                        >
                                            View Details <span className="text-xs">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </AnimatedContent>
                ))}
            </div>

            <div className="mt-10 text-right">
                <a
                    className="inline-flex items-center text-sm font-medium transition-colors group"
                    href="#"
                    style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
                >
                    Show all projects <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </section>
    );
}
