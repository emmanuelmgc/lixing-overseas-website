"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="zh-CN">
      <body>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#F7F3EA", color: "#071A2F" }}>
          <section style={{ maxWidth: 640 }}>
            <p style={{ color: "#B88A4A", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700 }}>Error</p>
            <h1 style={{ fontFamily: "serif", fontSize: 42, lineHeight: 1.15 }}>页面暂时无法显示</h1>
            <p style={{ lineHeight: 1.8, color: "#4B5563" }}>请稍后重试，或回到首页重新进入。</p>
            <button onClick={reset} style={{ marginTop: 24, background: "#B88A4A", color: "#03111F", border: 0, borderRadius: 4, padding: "12px 18px", fontWeight: 700 }}>重试</button>
          </section>
        </main>
      </body>
    </html>
  );
}
