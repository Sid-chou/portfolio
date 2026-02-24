type ContactProps = {
    isDark: boolean;
};

export default function Contact({ isDark }: ContactProps) {
    const inputBg = isDark ? "bg-[#1a1a2e]" : "bg-white";
    const inputBorder = isDark ? "border-gray-700" : "border-gray-300";
    const inputText = isDark ? "text-gray-300" : "text-gray-900";
    const inputPlaceholder = isDark ? "placeholder-gray-500" : "placeholder-gray-400";

    const inputClass = `w-full ${inputBg} border ${inputBorder} ${inputText} ${inputPlaceholder} p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-none transition-colors font-sans`;

    const socialBg = isDark ? "bg-[#1a1a2e]" : "bg-white";
    const socialBorder = isDark ? "border-gray-700" : "border-gray-300";
    const socialText = isDark ? "text-gray-500" : "text-gray-400";
    const socialIconClass = `group w-10 h-10 border ${socialBorder} flex items-center justify-center ${socialBg} hover:border-primary transition-colors`;

    return (
        <section className="w-full mb-24 relative" id="contact">
            <div className="w-full text-center">
                <div className="mb-12">
                    <p className="font-pixel text-gray-500 mb-6 tracking-widest text-xs uppercase">Save_Point</p>
                    <h3 className="font-sans font-bold text-4xl md:text-5xl transition-colors" style={{ color: isDark ? "#ffffff" : "#1a1a1a" }}>Let's Talk.</h3>
                </div>
                <form className="w-full space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="sr-only" htmlFor="name">Name</label>
                            <input className={inputClass} id="name" name="name" placeholder="Name" type="text" />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="email">Email</label>
                            <input className={inputClass} id="email" name="email" placeholder="Email" type="email" />
                        </div>
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="message">Message</label>
                        <textarea className={`${inputClass} resize-none`} id="message" name="message" placeholder="Your message..." rows={6}></textarea>
                    </div>
                    <div className="text-center pt-6">
                        <button className="inline-block px-10 py-4 bg-gameboy-blue text-white font-pixel text-xs tracking-wider uppercase hover:brightness-110 transition-all shadow-pixel-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]" type="submit">
                            Send_Message
                        </button>
                    </div>
                </form>
                <div className="mt-16 flex justify-center gap-6">
                    <a className={socialIconClass} href="#">
                        <i className={`devicon-twitter-original ${socialText} group-hover:text-primary transition-colors`}></i>
                    </a>
                    <a className={socialIconClass} href="#">
                        <i className={`devicon-linkedin-plain ${socialText} group-hover:text-primary transition-colors`}></i>
                    </a>
                    <a className={socialIconClass} href="#">
                        <i className={`devicon-github-original ${socialText} group-hover:text-primary transition-colors`}></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
