import { useState, useEffect } from 'react';
import { FaSpotify } from "react-icons/fa";
import { Play, Pause } from "lucide-react";
import { getRecentlyPlayed } from '../utils/spotify';
import { FaXTwitter, FaLinkedinIn, FaGithub, FaYoutube, FaInstagram, FaPinterestP } from "react-icons/fa6";
import { motion } from "framer-motion"
import TextType from '../../components/TextType';

const socialLinks = [
    { label: "Twitter / X", href: "https://x.com/louis3995984693", icon: <FaXTwitter size={18} /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sidhant-choudhury-169b442b1/", icon: <FaLinkedinIn size={18} /> },
    { label: "GitHub", href: "https://github.com/Sid-chou", icon: <FaGithub size={18} /> },
    { label: "YouTube", href: "https://youtube.com/@yourchannel", icon: <FaYoutube size={18} /> },
    { label: "Instagram", href: "https://www.instagram.com/mainly.sid/", icon: <FaInstagram size={18} /> },
    { label: "Pinterest", href: "https://in.pinterest.com/sidchoudhury16/", icon: <FaPinterestP size={18} /> },
];

type HeroProps = {
    isDark: boolean;
};

export default function Hero({ isDark }: HeroProps) {
    const [track, setTrack] = useState<{ name: string; artist: string; albumArt: string; trackUrl: string; trackId: string } | null>(null);
    const [showEmbed, setShowEmbed] = useState(false);

    useEffect(() => {
        getRecentlyPlayed().then(setTrack);
    }, []);

    return (
        <section className="w-full mb-20 pt-24 flex flex-col items-start text-left justify-start" id="hero">
            {/* Avatar with green "online" dot */}
            <div className="mb-6 relative group">
                <div className="w-20 h-20 rounded-full bg-[#ffd700] overflow-hidden relative shadow-lg shadow-[#ffd700]/10">
                    <img
                        alt="Sidhant"
                        className="w-full h-full object-cover"
                        src="/assets/louis_29.webp"
                    />
                </div>
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background z-10"></div>
            </div>

            {/* Headings */}
            <div className="mb-5">
                <h1
                    className="font-sans font-bold text-[36px] leading-tight tracking-tight"
                    style={{ color: isDark ? "#ffffff" : "#1a1a1a" }}
                >
                    Hi, I'm{" "}
                    <TextType
                        text={["Sidhant —"]}
                        typingSpeed={75}
                        deletingSpeed={50}
                        pauseDuration={10500}
                        showCursor={true}
                        cursorCharacter="_"
                        as="span"
                    />{" "}
                    <span className={`font-bold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>A Full Stack Developer.</span>
                </h1>
            </div>

            {/* Description with inline tech badges */}
            <div className="max-w-xl mb-8 text-justify">
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-[17px] leading-loose font-sans`}>
                    I build interactive web apps using{' '}
                    <span className={`inline-flex items-center align-middle gap-1.5 px-2 py-0.5 mx-1 border text-xs font-medium rounded transition-colors cursor-default select-none -translate-y-[1px] ${isDark ? 'bg-[#323036] border-white/10 text-gray-300 hover:border-white/30' : 'bg-[#e8e8e8] border-black/10 text-gray-600 hover:border-black/30'}`}>
                        <i className="devicon-react-original text-[#61dafb] text-[14px]"></i> React
                    </span>,{' '}
                    <span className={`inline-flex items-center align-middle gap-1.5 px-2 py-0.5 mx-1 border text-xs font-medium rounded transition-colors cursor-default select-none -translate-y-[1px] ${isDark ? 'bg-[#323036] border-white/10 text-gray-300 hover:border-white/30' : 'bg-[#e8e8e8] border-black/10 text-gray-600 hover:border-black/30'}`}>
                        <i className="devicon-spring-plain text-[#6db33f] text-[14px]"></i> Spring
                    </span> and{' '}
                    <span className={`inline-flex items-center align-middle gap-1.5 px-2 py-0.5 mx-1 border text-xs font-medium rounded transition-colors cursor-default select-none -translate-y-[1px] ${isDark ? 'bg-[#323036] border-white/10 text-gray-300 hover:border-white/30' : 'bg-[#e8e8e8] border-black/10 text-gray-600 hover:border-black/30'}`}>
                        <i className="devicon-mongodb-plain text-[#47a248] text-[14px]"></i> MongoDB
                    </span>. With a focus in UI design. Enthusiastic in{' '}
                    <span className={`inline-flex items-center align-middle gap-1.5 px-2 py-0.5 mx-1 border text-xs font-medium rounded transition-colors cursor-default select-none -translate-y-[1px] ${isDark ? 'bg-[#323036] border-white/10 text-gray-300 hover:border-white/30' : 'bg-[#e8e8e8] border-black/10 text-gray-600 hover:border-black/30'}`}>
                        <i className="devicon-java-plain text-[#f89820] text-[14px]"></i> Java
                    </span> development.
                </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
                <a className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 border font-sans text-[12px] font-medium rounded-xl transition-all group ${isDark ? 'bg-[#111] border-white/20 text-white hover:bg-[#2a2a2a] hover:border-white/40' : 'bg-white border-black/15 text-[#1a1a1a] hover:bg-[#e8e8e8] hover:border-black/30'}`} href="#">
                    <span className={`material-symbols-outlined text-[15px] ${isDark ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-500 group-hover:text-gray-700'}`}>description</span>
                    Resume / CV
                </a>
                <a className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 border font-sans text-[12px] font-medium rounded-xl group ${isDark ? 'bg-white border-white text-black' : 'bg-black border-black text-white'}`} href="#contact">
                    <span className={`material-symbols-outlined text-[15px] ${isDark ? 'text-black' : 'text-white'}`}>mail</span>
                    Get in Touch
                </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 mb-4">
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
            <div className={`w-full mt-4 border rounded-xl overflow-hidden transition-colors ${isDark ? 'bg-[#111111] border-white/10 hover:border-white/20' : 'bg-F2F3F4 border-black/10 hover:border-black/20'}`}>
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
                        <p className={`text-[11px] uppercase tracking-wider mb-0.5 font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                            {showEmbed ? "Now Playing" : "Last Played on Spotify"}
                        </p>
                        <div className="flex items-center gap-2 overflow-hidden">
                            <span className={`text-sm font-medium truncate ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                                {track?.name || "Loading..."}
                            </span>
                            <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
                            <span className={`text-sm truncate ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                {track?.artist || ""}
                            </span>
                        </div>
                    </div>

                    {/* Play/Pause toggle */}
                    <button
                        onClick={() => setShowEmbed(prev => !prev)}
                        aria-label={showEmbed ? "Hide player" : "Play"}
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors flex-shrink-0 ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'}`}
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
                        src={`https://open.spotify.com/embed/track/${track.trackId}?utm_source=generator&theme=${isDark ? '0' : '1'}`}
                        width="100%"
                        height="80"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className={`border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}
                    />
                )}
            </div>
        </section>
    );
}
