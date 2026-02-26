import { useEffect, useState } from "react"
import { Sun, Moon, ExternalLink } from "lucide-react"

export default function Resume() {
  const [isDark, setIsDark] = useState(true)

  // Read saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "light") {
      setIsDark(false)
      document.documentElement.classList.add("light")
    } else {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
      localStorage.setItem("theme", "light")
    }
  }

  // ← paste your Google Drive /preview URL here
  const RESUME_EMBED_URL = "https://drive.google.com/file/d/1Y9ihJNMLRaat2X5rpGugWz-KkslZtYvz/preview"
  // OR if hosting locally:
  // const RESUME_EMBED_URL = "/resume.pdf"

  return (
    <div
      className="min-h-screen"
      style={{ background: isDark ? "#0a0a0a" : "#FFFFF2" }}
    >
      {/* Mini navbar */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: 68,
          backdropFilter: "blur(12px)",
          background: isDark ? "rgba(10,10,10,0.4)" : "rgba(255,255,242,0.4)",
        }}
      >
        <nav className="max-w-[760px] mx-auto px-6 h-full
                        flex items-center justify-between">
          {/* Back to portfolio */}
          <a
            href="/"
            style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
            className="text-sm hover:underline flex items-center gap-2"
          >
            ← Back
          </a>

          <div className="flex items-center gap-4">
            {/* Open in new tab */}
            <a
              href={RESUME_EMBED_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
              className="flex items-center gap-1 text-sm hover:underline"
            >
              <ExternalLink size={14} />
              Open
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Page content */}
      <div className="max-w-[760px] mx-auto px-6 pt-[68px]">

        {/* Heading — same style as Ram */}
        <div className="py-16 text-center">
          <h1
            className="text-4xl font-bold mb-3"
            style={{ color: isDark ? "#ffffff" : "#1a1a1a" }}
          >
            Resume
          </h1>
          <p style={{ color: isDark ? "#6b7280" : "#9ca3af" }}>
            My resume.
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-full mb-8"
          style={{
            height: "1px",
            background: isDark
              ? "rgba(255,255,255,0.08)"
              : "rgba(0,0,0,0.08)"
          }}
        />

        {/* PDF Embed */}
        <div className="relative w-full rounded-xl overflow-hidden"
          style={{ height: "80vh" }}>
          <iframe
            src={RESUME_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Resume"
          />
        </div>

        <div className="h-16" /> {/* bottom spacing */}
      </div>
    </div>
  )
}