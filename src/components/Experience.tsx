type ExperienceProps = {
    isDark: boolean;
};

export default function Experience({ isDark }: ExperienceProps) {
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
