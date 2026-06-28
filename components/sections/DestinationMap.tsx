export function DestinationMap({ compact = false }: { compact?: boolean }) {
  return (
    <div className="border border-line bg-ink p-5 text-white shadow-dossier">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Resource Route</p>
        <span className="text-xs text-white/55">项目区域示意</span>
      </div>
      <svg viewBox="0 0 620 390" className={compact ? "h-[280px] w-full" : "h-[360px] w-full"} role="img" aria-label="中亚、法语区、东南亚目的地区域示意图">
        <rect x="0" y="0" width="620" height="390" fill="#03111F" />
        <path d="M70 238 C126 156 212 136 292 182 C360 222 423 120 546 100" fill="none" stroke="#B88A4A" strokeWidth="2" strokeDasharray="8 10" opacity="0.9" />
        <path d="M94 284 C190 318 302 302 468 220" fill="none" stroke="#EEF2F5" strokeWidth="1.3" opacity="0.28" />
        <path d="M62 178 C148 101 260 100 322 144 C374 181 448 174 555 150" fill="none" stroke="#EEF2F5" strokeWidth="1" opacity="0.2" />
        {[
          { x: 170, y: 190, label: "乌兹别克斯坦 / 中亚" },
          { x: 340, y: 135, label: "法国 / 北非 / 西非" },
          { x: 468, y: 250, label: "东南亚" },
          { x: 120, y: 300, label: "其他新兴市场" },
        ].map((node) => (
          <g key={node.label}>
            <circle cx={node.x} cy={node.y} r="9" fill="#B88A4A" />
            <circle cx={node.x} cy={node.y} r="24" fill="none" stroke="#B88A4A" opacity="0.28" />
            <text x={node.x + 16} y={node.y + 5} fontSize="17" fill="#F7F3EA">{node.label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

