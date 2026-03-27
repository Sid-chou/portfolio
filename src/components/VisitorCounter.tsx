import { useState, useEffect } from "react";

type VisitorCounterProps = {
    isDark: boolean;
};

// Tabler Icons — Eye outline SVG (inline, no dependency needed)
function IconEye({ size = 14, color }: { size?: number; color: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Tabler "eye" outline */}
            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
        </svg>
    );
}

// Format number with k suffix for readability
function formatCount(n: number): string {
    if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
    return n.toString();
}

export default function VisitorCounter({ isDark }: VisitorCounterProps) {
    const [count, setCount] = useState<number | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        // We use Abacus (abacus.jasoncameron.dev) because its domain is generic
        // and completely bypasses ad-blockers (unlike counterapi.xyz which gets blocked).
        const NAMESPACE = "sidhantchoudhury";
        const KEY = "portfolio-visits";
        const SESSION_KEY = "vc_counted_abacus";

        const alreadyCounted = sessionStorage.getItem(SESSION_KEY);

        // Abacus API: /hit increments, /get just reads
        const action = alreadyCounted ? "get" : "hit";
        const ENDPOINT = `https://abacus.jasoncameron.dev/${action}/${NAMESPACE}/${KEY}`;

        let cancelled = false;

        fetch(ENDPOINT)
            .then((res) => {
                if (!res.ok) throw new Error("API error");
                return res.json();
            })
            .then((data: { value?: number }) => {
                if (!cancelled && data.value !== undefined && data.value !== null) {
                    setCount(data.value);
                    if (!alreadyCounted) sessionStorage.setItem(SESSION_KEY, "1");
                } else if (!cancelled) {
                    setError(true);
                }
            })
            .catch(() => {
                if (!cancelled) setError(true);
            });

        return () => {
            cancelled = true;
        };
    }, []);

    const iconColor = isDark
        ? "rgba(255,255,255,0.35)"
        : "rgba(0,0,0,0.35)";

    const textColor = isDark
        ? "rgba(255,255,255,0.35)"
        : "rgba(0,0,0,0.35)";

    const borderColor = isDark
        ? "rgba(255,255,255,0.08)"
        : "rgba(0,0,0,0.08)";

    const bgColor = isDark
        ? "rgba(255,255,255,0.04)"
        : "rgba(0,0,0,0.04)";

    if (error) return null; // silently hide if API fails

    return (
        <div
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 10px",
                borderRadius: 99,
                border: `1px solid ${borderColor}`,
                background: bgColor,
                transition: "all 200ms ease",
            }}
            title="Total site visits"
        >
            <IconEye size={13} color={iconColor} />
            <span
                style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    color: textColor,
                    letterSpacing: "0.04em",
                    fontVariantNumeric: "tabular-nums",
                    lineHeight: 1,
                    minWidth: 20,
                    textAlign: "center",
                }}
            >
                {count === null ? (
                    // Animated loading dot
                    <span
                        style={{
                            display: "inline-block",
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: textColor,
                            opacity: 0.5,
                            animation: "vc-pulse 1.2s ease-in-out infinite",
                        }}
                    />
                ) : (
                    formatCount(count)
                )}
            </span>
            <style>{`
                @keyframes vc-pulse {
                    0%, 100% { opacity: 0.2; transform: scale(0.8); }
                    50%       { opacity: 0.7; transform: scale(1.1); }
                }
            `}</style>
        </div>
    );
}
