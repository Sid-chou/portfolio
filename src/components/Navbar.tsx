import React, { useState, useEffect, useCallback } from "react";
import { Command } from "cmdk";
import {
    Sun,
    Moon,
    Briefcase,
    FolderOpen,
    User,
    Mail,
    FileText,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const NAV_LINKS = [
    { label: "Work", id: "work" },
    { label: "Projects", id: "projects" },
    { label: "About", id: "about" },
];

type NavbarProps = {
    isDark: boolean;
    toggleTheme: () => void;
};

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    /* ── Ctrl+K / Cmd+K shortcut ── */
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();
                setOpen((prev) => !prev);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    /* ── Active section detection via IntersectionObserver ── */
    useEffect(() => {
        const sections = ["work", "projects", "about"];
        const observers = sections.map((id) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { threshold: 0.3 }
            );
            observer.observe(el);
            return observer;
        });
        return () => observers.forEach((obs) => obs?.disconnect());
    }, []);

    /* ── Navigation helper ── */
    const navigateTo = useCallback((id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    }, []);

    /* ── Smooth scroll for nav links ── */
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    /* ── Palette items ── */
    const paletteItems = [
        { label: "Work Experience", icon: <Briefcase size={14} />, action: () => navigateTo("work") },
        { label: "Projects", icon: <FolderOpen size={14} />, action: () => navigateTo("projects") },
        { label: "About Me", icon: <User size={14} />, action: () => navigateTo("about") },
        { label: "Contact", icon: <Mail size={14} />, action: () => navigateTo("contact") },
        {
            label: "Resume / CV",
            icon: <FileText size={16} />,
            action: () => { window.open(`${import.meta.env.BASE_URL}#/resume`, "_blank"); setOpen(false); },
        },
        {
            label: "GitHub",
            icon: <FaGithub size={16} />,
            action: () => { window.open("https://github.com/Sid-chou", "_blank"); setOpen(false); },
        },
        {
            label: "Toggle Theme",
            icon: isDark ? <Sun size={16} /> : <Moon size={16} />,
            action: () => { toggleTheme(); setOpen(false); },
        },
    ];

    return (
        <>
            {/* ── Fixed Navbar ── */}
            <header
                className="fixed top-0 left-0 right-0 z-50"
                style={{
                    height: 68,
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    background: isDark
                        ? "rgba(10, 10, 10, 0.4)" //this is for teanslucent fature 
                        : "rgba(255, 255, 242, 0.4)",
                    borderBottom: "none"
                }}
            >
                <nav className="max-w-[760px] mx-auto px-6 h-[68px] flex items-end justify-between">
                    {/* LEFT — Profile Photo + Nav Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="flex items-center"
                        >
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
                                <img
                                    src={`${import.meta.env.BASE_URL}assets/louis_29.webp`}
                                    alt="Sidhant"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </a>

                        {/* Nav links — hidden on small screens */}
                        <div className="hidden md:flex items-end gap-6 pb-2">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: 14,
                                        textTransform: "none",
                                        letterSpacing: "0.04em",
                                        transition: "color 150ms ease",
                                        fontWeight: 500,
                                        color: isDark ? "#ffffff" : "#1a1a1a",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeSection !== link.id) {
                                            e.currentTarget.style.color = isDark ? "#ffffff" : "#1a1a1a";
                                        }
                                        e.currentTarget.style.textDecoration = "underline";
                                        e.currentTarget.style.textUnderlineOffset = "4px"; //this increae the dist betw text and underline f
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeSection !== link.id) {
                                            e.currentTarget.style.color = isDark ? "#ffffff" : "#1a1a1a";
                                        }
                                        e.currentTarget.style.textDecoration = "none";
                                    }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — search + theme */}
                    <div className="flex items-center gap-6 pb-4">

                        {/* Search trigger — desktop */}
                        <button
                            onClick={() => setOpen(true)}
                            className="hidden md:flex items-center gap-2 cursor-pointer"
                            style={{
                                padding: "4px 12px",
                                borderRadius: 8,
                                fontSize: 13,
                                fontFamily: "'Inter', sans-serif",
                                background: isDark
                                    ? "rgba(255,255,255,0.05)"
                                    : "rgba(0,0,0,0.05)",
                                border: isDark
                                    ? "1px solid rgba(255,255,255,0.10)"
                                    : "1px solid rgba(0,0,0,0.10)",
                                color: isDark ? "#ffffff" : "#1a1a1a",
                                transition: "border-color 150ms ease",
                            }}
                        >
                            <span>Search</span>
                            <kbd
                                style={{
                                    background: isDark
                                        ? "rgba(255, 255, 255, 0.1)"
                                        : "rgba(0,0,0,0.10)",
                                    borderRadius: 4,
                                    padding: "1px 6px",
                                    fontSize: 11,
                                    marginLeft: 8,
                                    color: isDark ? "#ffffff" : "#1a1a1a",
                                }}
                            >
                                Ctrl K
                            </kbd>
                        </button>

                        {/* Mobile search (icon only) */}
                        <button
                            onClick={() => setOpen(true)}
                            className={`md:hidden transition-colors cursor-pointer ${isDark
                                ? "text-gray-400 hover:text-white"
                                : "text-gray-500 hover:text-[#1a1a1a]"
                                }`}
                            aria-label="Search"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                            </svg>
                        </button>

                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`transition-colors cursor-pointer ${isDark
                                ? "text-gray-400 hover:text-white"
                                : "text-gray-500 hover:text-[#1a1a1a]"
                                }`}
                            aria-label="Toggle theme"
                            style={{ background: "none", border: "none", padding: 0 }}
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* ── Command Palette ── */}
            {open && (
                <>
                    {/* Overlay */}
                    <div
                        className="cmdk-overlay"
                        onClick={() => setOpen(false)}
                    />

                    {/* Palette */}
                    <Command
                        onKeyDown={(e: React.KeyboardEvent) => {
                            if (e.key === "Escape") setOpen(false);
                        }}
                    >
                        <Command.Input placeholder="Type a command or search…" />
                        <Command.List>
                            <Command.Empty>No results found.</Command.Empty>
                            <Command.Group heading="Navigation">
                                {paletteItems.map((item) => (
                                    <Command.Item
                                        key={item.label}
                                        onSelect={item.action}
                                    >
                                        <span style={{ opacity: 0.6, display: "flex", alignItems: "center" }}>
                                            {item.icon}
                                        </span>
                                        <span style={{ flexGrow: 1 }}>{item.label}</span>
                                    </Command.Item>
                                ))}
                            </Command.Group>
                        </Command.List>
                    </Command>
                </>
            )}
        </>
    );
}
