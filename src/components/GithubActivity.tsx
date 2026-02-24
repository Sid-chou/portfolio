import { useState, useEffect } from "react";
import AnimatedContent from "../../components/AnimatedContent";

type Day = { date: string, count: number, level: number };

// ─── CONFIG ────────────────────────────────────────────────────────────────
const GITHUB_USERNAME = "Sid-chou";

// ─── HELPERS ──────────────────────────────────────────────────────────────
function buildWeeks(days: Day[]) {
    if (!days.length) return [];
    const firstDow = new Date(days[0].date).getDay();
    const padded = [...Array(firstDow).fill(null), ...days];
    const weeks = [];
    for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7));
    return weeks;
}

function getMonthLabels(weeks: any[]) {
    const labels: { wi: number, label: string }[] = [];
    let lastMonth = -1;
    weeks.forEach((week, wi) => {
        const first = week.find(Boolean);
        if (!first) return;
        const m = new Date(first.date).getMonth();
        if (m !== lastMonth) {
            labels.push({ wi, label: new Date(first.date).toLocaleString("default", { month: "short" }) });
            lastMonth = m;
        }
    });
    return labels;
}

function levelColor(count: number, dark: boolean) {
    if (count === 0) return dark ? "#1c2128" : "#ebedf0";
    if (count <= 2) return dark ? "#0e4429" : "#9be9a8";
    if (count <= 5) return dark ? "#006d32" : "#40c463";
    if (count <= 9) return dark ? "#26a641" : "#30a14e";
    return dark ? "#39d353" : "#216e39";
}

const CELL = 11, GAP = 2, STEP = CELL + GAP;

// ─── SKELETON ─────────────────────────────────────────────────────────────
function Skeleton({ dark }: { dark: boolean }) {
    const bg = dark ? "#21262d" : "#e4e9ef";
    const width = 47 * STEP;
    const height = 7 * STEP + 20;

    return (
        <div className="w-full [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-w-full [&>svg]:overflow-visible">
            <style>{`
                @keyframes shimmer{
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }
            `}</style>
            <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMinYMin meet">
                {Array.from({ length: 47 }).map((_, wi) => (
                    <g key={wi} transform={`translate(${wi * STEP}, 20)`}>
                        {Array.from({ length: 7 }).map((_, di) => (
                            <rect
                                key={di}
                                y={di * STEP}
                                width={CELL}
                                height={CELL}
                                rx={2}
                                fill={bg}
                                style={{ animation: `shimmer 1.5s infinite`, animationDelay: `${(wi * 7 + di) * 5}ms` }}
                            />
                        ))}
                    </g>
                ))}
            </svg>
        </div>
    );
}

type GithubActivityProps = {
    isDark: boolean;
};

// ─── MAIN ─────────────────────────────────────────────────────────────────
export default function GithubActivity({ isDark }: GithubActivityProps) {
    const [days, setDays] = useState<Day[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch real contributions
    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
            },
            body: JSON.stringify({
                query: `{
                  user(login: "${GITHUB_USERNAME}") {
                    contributionsCollection {
                      contributionCalendar {
                        totalContributions
                        weeks {
                          contributionDays {
                            date
                            contributionCount
                          }
                        }
                      }
                    }
                  }
                }`
            })
        })
            .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
            .then((json) => {
                if (json.errors) {
                    throw new Error(json.errors[0]?.message || "GraphQL Error");
                }
                const cal = json.data.user.contributionsCollection.contributionCalendar;
                const flat = cal.weeks.flatMap((w: any) => w.contributionDays.map((d: any) => ({
                    date: d.date,
                    count: d.contributionCount
                })));
                setDays(flat);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError("Couldn't load contributions. Check your connection or token.");
                setLoading(false);
            });
    }, []);

    // Theme tokens mapped to isDark
    const dark = isDark;
    const cardBg = dark ? "#000000" : "#FFFFF2";
    const border = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
    const text = dark ? "#e6edf3" : "#1c2128";
    const muted = dark ? "#7d8590" : "#6b7280";
    const accent = dark ? "#39d353" : "#216e39";

    let weeks = buildWeeks(days);

    // Replicate exactly the 47-column sliding window like the recent GitHub UI.
    // Each day one block drops from the oldest month to add the newest day on the right.
    if (weeks.length > 47) {
        weeks = weeks.slice(-47);
    }

    const monthLabels = getMonthLabels(weeks);
    const total = days.reduce((s, d) => s + (d?.count || 0), 0);
    const streak = (() => {
        let s = 0;
        for (let i = days.length - 1; i >= 0; i--) {
            if (days[i]?.count > 0) s++; else break;
        }
        return s;
    })();
    const today = new Date().toISOString().split("T")[0];

    return (
        <section className="w-full mb-40 overflow-hidden" id="github">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,400;0,500;1,400&family=Syne:wght@700;800&display=swap');
        .gh-cell{transition:filter .1s ease, stroke-width .1s ease;}
        .gh-cell:hover{filter:brightness(1.5); stroke: #ffffff; stroke-width: 1.5px;}
        .stat-pill:hover{border-color:${accent}!important;}
      `}</style>
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
                <div style={{ fontFamily: "'DM Mono', monospace", width: "100%", display: "flex", justifyContent: "flex-start", transition: "background .3s", background: cardBg, padding: "2rem", borderRadius: "14px" }}>
                    <div style={{ width: "100%", maxWidth: 900 }}>

                        {/* Header */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.8rem", paddingLeft: "10px" }}>
                            <div>
                                <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: muted, marginBottom: 10 }}>
                                    Featured
                                </p>
                                <h2 className="font-sans font-bold tracking-tight text-3xl" style={{ marginBottom: 8, lineHeight: 1.2 }}>
                                    Github Activity
                                </h2>
                                <p style={{ fontSize: 13, color: muted, marginTop: 4 }}>
                                    Total: <strong style={{ color: text }}>{total.toLocaleString()}</strong> contributions
                                </p>

                            </div>
                        </div>

                        {/* Heatmap card */}
                        <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 14, padding: "24px 28px 18px", position: "relative", width: "100%", overflow: "hidden" }}>

                            {loading ? (
                                <Skeleton dark={dark} />
                            ) : error ? (
                                <div style={{ height: 112, display: "flex", alignItems: "center", justifyContent: "center", color: "#f85149", fontSize: 13, gap: 6 }}>
                                    ⚠ {error}
                                </div>
                            ) : (
                                <div className="w-full [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-w-full [&>svg]:overflow-visible">
                                    <svg viewBox={`0 0 ${47 * STEP} ${7 * STEP + 20}`} preserveAspectRatio="xMinYMin meet">
                                        {/* Month labels */}
                                        <g>
                                            {monthLabels.map(({ wi, label }) => (
                                                <text
                                                    key={label + wi}
                                                    x={wi * STEP}
                                                    y={10}
                                                    fontSize={10}
                                                    fill={muted}
                                                    fontFamily="'DM Mono', monospace"
                                                    letterSpacing="0.05em"
                                                >
                                                    {label}
                                                </text>
                                            ))}
                                        </g>

                                        {/* Grid */}
                                        <g transform="translate(0, 20)">
                                            {weeks.map((week, wi) => (
                                                <g key={wi} transform={`translate(${wi * STEP}, 0)`}>
                                                    {[0, 1, 2, 3, 4, 5, 6].map((dow) => {
                                                        const day = week[dow];
                                                        if (!day) return <rect key={dow} y={dow * STEP} width={CELL} height={CELL} fill="transparent" />;
                                                        return (
                                                            <rect
                                                                key={dow}
                                                                y={dow * STEP}
                                                                width={CELL}
                                                                height={CELL}
                                                                rx={2}
                                                                fill={levelColor(day.count, dark)}
                                                                stroke={dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)"}
                                                                strokeWidth={1}
                                                                className="gh-cell"
                                                            >
                                                                <title>{`${day.count} contributions on ${day.date}`}</title>
                                                            </rect>
                                                        );
                                                    })}
                                                </g>
                                            ))}
                                        </g>
                                    </svg>

                                    {/* Legend */}
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8, marginTop: 10 }}>
                                        <span style={{ fontSize: 10, color: muted }}>Less</span>
                                        <svg width={85} height={13} viewBox="0 0 85 13" style={{ overflow: "visible" }}>
                                            {[0, 1, 3, 6, 10, 15].map((v, i) => (
                                                <rect key={v} x={i * 15} width={13} height={13} rx={2} fill={levelColor(v, dark)} stroke={dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)"} />
                                            ))}
                                        </svg>
                                        <span style={{ fontSize: 10, color: muted }}>More</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </AnimatedContent>
        </section>
    );
}

