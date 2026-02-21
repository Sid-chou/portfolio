import { useState, useEffect } from 'react';
import { FaSpotify } from "react-icons/fa";
import { Play, Pause } from "lucide-react";
import { getRecentlyPlayed } from '../utils/spotify';
import { FaXTwitter, FaLinkedinIn, FaGithub, FaYoutube, FaInstagram, FaPinterestP } from "react-icons/fa6";

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
        <section className="w-full mb-24 pt-16 flex flex-col items-start text-left" id="hero">
            {/* Avatar with green "online" dot */}
            <div className="mb-3 relative group">
                <div className="w-20 h-20 rounded-full bg-[#ffd700] overflow-hidden relative shadow-lg shadow-[#ffd700]/10 ring-4 ring-black">
                    <img
                        alt="Sidhant"
                        className="w-full h-full object-cover"
                        src="/assets/louis_29.webp"
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
