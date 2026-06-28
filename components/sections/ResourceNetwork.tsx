import Image from "next/image";
import { resources } from "@/data/resources";
import { ResourceCard } from "@/components/cards/ResourceCard";

export function ResourceNetwork({ limit }: { limit?: number }) {
  const shown = typeof limit === "number" ? resources.slice(0, limit) : resources;
  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div className="border border-line bg-white p-5 shadow-dossier">
        <div className="relative h-72 overflow-hidden bg-rice md:h-96">
          <Image src="/images/lixing/ppt-boardroom-dialogue.webp" alt="资源对接现场" fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          <svg viewBox="0 0 520 310" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <path d="M76 220 L190 132 L312 186 L430 92" fill="none" stroke="#B88A4A" strokeWidth="2" strokeDasharray="6 8" />
            {[{x:76,y:220},{x:190,y:132},{x:312,y:186},{x:430,y:92},{x:388,y:238},{x:142,y:72}].map((n, i) => <circle key={i} cx={n.x} cy={n.y} r="8" fill="#B88A4A" />)}
          </svg>
          <div className="absolute bottom-5 left-5 right-5 border border-white/20 bg-ink/80 p-4 text-white backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Network in Project</p>
            <p className="mt-2 text-sm leading-6 text-white/80">资源进入具体项目流程，用于验证、筛选、对接和风险提示。</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {shown.map((resource) => <ResourceCard key={resource.type} resource={resource} />)}
      </div>
    </div>
  );
}

