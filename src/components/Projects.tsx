type ProjectsProps = {
    isDark: boolean;
};

export default function Projects({ isDark }: ProjectsProps) {
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
