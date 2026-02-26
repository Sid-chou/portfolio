import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedContent from '../../components/AnimatedContent';
import { BorderBeam } from './ui/border-beam';

type ContactProps = {
    isDark: boolean;
};

export default function Contact({ isDark }: ContactProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: name,
                    from_email: email,
                    message: message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");

        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus("error");
        }
    };

    const inputBg = isDark ? "bg-black" : "bg-white";
    const inputBorder = isDark ? "border-gray-800" : "border-gray-300";
    const inputText = isDark ? "text-gray-300" : "text-gray-900";
    const inputPlaceholder = isDark ? "placeholder-gray-500" : "placeholder-gray-400";

    const inputClass = `w-full ${inputBg} border ${inputBorder} rounded-xl ${inputText} ${inputPlaceholder} p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-none transition-colors font-sans`;


    return (
        <section className="w-full mb-24 relative" id="contact">
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
                container={null}
                onComplete={undefined}
                onDisappearanceComplete={undefined}
            >
                <div className="mb-10 text-left flex flex-col items-start gap-2">
                    <div className="mb-6">
                        <h2
                            className="text-sm font-sans font-medium tracking-wide"
                            style={{ color: isDark ? "#a1a1aa" : "#71717a" }}
                        >
                            Contact
                        </h2>
                        <h2
                            className="text-3xl font-sans font-bold tracking-tight"
                            style={{ color: isDark ? "#ffffff" : "#1a1a1a" }}
                        >
                            Me
                        </h2>
                        {/* <p className="font-sans text-gray-500 mb-6 ">Contact Me</p> */}
                        {/* <h3 className="font-sans font-bold text-4xl md:text-5xl transition-colors" style={{ color: isDark ? "#ffffff" : "#1a1a1a" }}>Let's Talk.</h3> */}
                    </div>
                    <form className="w-full space-y-3 text-left" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input className={inputClass} id="name" name="name" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="email">Email</label>
                                <input className={inputClass} id="email" name="email" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="message">Message</label>
                            <textarea className={`${inputClass} resize-none`} id="message" name="message" placeholder="Your message..." rows={6} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <div className="text-left pt-4">
                            <button
                                className={`relative inline-block px-8 py-3 rounded-xl font-sans font-bold text-sm tracking-wider uppercase transition-all shadow-pixel-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] overflow-hidden 
                                    ${isDark
                                        ? "bg-black text-white hover:brightness-110"
                                        : "bg-[#f4f4f5] text-black border border-gray-300 hover:bg-[#e4e4e7]"
                                    }`}
                                type="submit"
                                disabled={status === "sending"}
                            >
                                {status === "sending" ? "Sending..." : status === "success" ? "Sent ✓" : status === "error" ? "Failed ✕" : "Send_Message"}
                                {isDark && <BorderBeam size={100} duration={8} delay={0} />}
                            </button>
                        </div>
                    </form>
                </div>
            </AnimatedContent>
        </section>
    );
}
