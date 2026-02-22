import { useState, useEffect } from "react";

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
    const shine = dark ? "#30363d" : "#f2f5f8";
    return (
        <div style={{ position: "relative", width: "100%", display: "flex", gap: "max(1px, 0.2vw)" }}>
            <style>{`@keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}`}</style>
            <div style={{ width: "3%", minWidth: "15px" }}></div>
            {Array.from({ length: 53 }).map((_, wi) => (
                <div key={wi} style={{ display: "flex", flexDirection: "column", gap: "max(1px, 0.2vw)", flex: 1 }}>
                    {Array.from({ length: 7 }).map((_, di) => (
                        <div key={di} style={{ width: "100%", aspectRatio: "1 / 1", borderRadius: "min(2px, 0.3vw)", background: bg, position: "relative", overflow: "hidden" }}>
                            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(90deg, transparent, ${shine}, transparent)`, animation: `shimmer 1.5s infinite`, animationDelay: `${(wi * 7 + di) * 7}ms` }} />
                        </div>
                    ))}
                </div>
            ))}
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

    const weeks = buildWeeks(days);
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
        .gh-cell{transition:transform .08s ease,filter .08s ease;}
        .gh-cell:hover{transform:scale(1.45)!important;filter:brightness(1.3)!important;z-index:10;position:relative;}
        .stat-pill:hover{border-color:${accent}!important;}
      `}</style>
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
                            <div style={{ position: "relative", minWidth: "max-content" }}>

                                {/* Month labels */}
                                <div style={{ position: "relative", height: 18, marginLeft: 0 }}>
                                    {monthLabels.map(({ wi, label }) => {
                                        return (
                                            <span key={label + wi} style={{ position: "absolute", left: wi * STEP, fontSize: 10, color: muted, letterSpacing: "0.05em" }}>{label}</span>
                                        );
                                    })}
                                </div>

                                {/* Grid */}
                                <div style={{ display: "flex", gap: GAP, width: "100%", overflow: "hidden" }}>
                                    {weeks.map((week, wi) => {
                                        return (
                                            <div
                                                key={wi}
                                                style={{ display: "flex", flexDirection: "column", gap: GAP }}
                                            >
                                                {[0, 1, 2, 3, 4, 5, 6].map((dow) => {
                                                    const day = week[dow];
                                                    if (!day) return <div key={dow} style={{ width: CELL, height: CELL }} />;
                                                    return (
                                                        <div
                                                            key={dow}
                                                            className="gh-cell"
                                                            style={{
                                                                width: CELL, height: CELL, borderRadius: 3,
                                                                background: levelColor(day.count, dark),
                                                                cursor: "default",
                                                                border: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)"}`,
                                                            }}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Legend */}
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 5, marginTop: 10 }}>
                                    <span style={{ fontSize: 10, color: muted }}>Less</span>
                                    {[0, 1, 3, 6, 10, 15].map((v) => (
                                        <div key={v} style={{ width: 13, height: 13, borderRadius: 3, background: levelColor(v, dark), border: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)"}` }} />
                                    ))}
                                    <span style={{ fontSize: 10, color: muted }}>More</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

