type AboutProps = {
    isDark: boolean;
};

export default function About({ isDark }: AboutProps) {
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
                            alt="Sidhant"
                            className="w-full h-full object-cover"
                            src="/assets/louis_29.webp"
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
