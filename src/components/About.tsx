import StackIcon from "tech-stack-icons";
import AnimatedContent from "../../components/AnimatedContent";

type AboutProps = {
    isDark: boolean;
};

export default function About({ isDark }: AboutProps) {
    const skills = [
        { name: "React", icon: "devicon-react-original", isDevicon: true },
        { name: "TypeScript", icon: "typescript" },
        { name: "Spring Boot", icon: "spring" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "PostgreSQL", icon: "postgresql" },
    ];

    return (
        <section className="w-full mb-40 py-8" id="about">
            {/* Section heading — clean, theme-aware */}
            <div className="mb-10 text-left flex flex-col items-start gap-1">
                <h2
                    className="text-sm font-sans font-medium tracking-wide"
                    style={{ color: isDark ? "#a1a1aa" : "#71717a" }}
                >
                    About   
                </h2>
                <h2
                    className="text-4xl font-sans font-bold tracking-tight"
                    style={{ color: isDark ? "#ffffff" : "#1a1a1a" }}
                >
                    Me
                </h2>
            </div>

            <AnimatedContent
                distance={60}
                direction="vertical"
                reverse={false}
                duration={0.6}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.1}
                delay={0}
                container={null}
                onComplete={undefined}
                onDisappearanceComplete={undefined}
            >
                <article
                    className="rounded-xl overflow-hidden flex flex-col md:flex-row gap-8 items-center p-8 transition-colors duration-300"
                    style={{
                        background: isDark ? "#000000" : "#FFFFF2",
                        border: isDark
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "1px solid rgba(0,0,0,0.08)",
                    }}
                >
                    <div className="flex-shrink-0">
                        <div className="w-[200px] h-[200px] rounded-xl bg-gray-900 border-none shadow-glow-yellow overflow-hidden relative">
                            <img
                                alt="Sidhant"
                                className="w-full h-full object-cover"
                                src="/assets/louis_29.webp"
                            />
                        </div>
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-3xl font-bold mb-6 font-sans" style={{ color: isDark ? "#ffffff" : "#1a1a1a" }}>Sidhant Choudhury.</h3>
                        <div className="text-lg leading-relaxed space-y-4 mb-8" style={{ color: isDark ? "#9ca3af" : "#6b7280" }}>
                            <p>I m a Full stack developer and design engineer, I love to create MVP and SaaS products to solve real world problem</p>
                        </div>

                        <div className="mt-8">
                            <p
                                className="text-[14px] font-medium uppercase tracking-wider mb-4 font-sans"
                                style={{ color: isDark ? "#4b5563" : "#9ca3af" }}
                            >
                                Skills
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {skills.map((skill, index) => (
                                    <div key={index} title={skill.name} className="w-[25px] h-[25px] flex items-center justify-center transition-transform hover:scale-110">
                                        {skill.isDevicon ? (
                                            <i className={`${skill.icon} text-[25px] ${isDark ? 'text-[#61dafb]' : 'text-[#61dafb]'}`}></i>
                                        ) : (
                                            <StackIcon name={skill.icon} className="w-full h-full" variant={isDark ? "dark" : "light"} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>
            </AnimatedContent>
        </section>
    );
}
