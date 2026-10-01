"use client";

import { useEffect } from "react";
import Image from "next/image";
import { MapPin, Star, X } from "lucide-react";
import { restaurant } from "@/app/data/restaurant";
import { MenuItem } from "@/app/types/menu";

interface MenuModalProps { item: MenuItem | null; onClose: () => void; }

export default function MenuModal({ item, onClose }: MenuModalProps) {
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#1e1712]/65 p-0 backdrop-blur-sm sm:items-center sm:p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="menu-item-title" className="relative max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Close dish details"><X size={20} /></button>
        <div className="relative aspect-[1.4] bg-[#f3eee8]"><Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 100vw, 512px" unoptimized className="object-cover" />
          {item.popular && <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#38291f] shadow"><Star aria-hidden="true" size={14} className="fill-orange-400 text-orange-400" />Guest favorite</span>}
        </div>
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">{item.category}</p><h2 id="menu-item-title" className="mt-2 text-2xl font-semibold tracking-tight text-[#2d241e]">{item.name}</h2></div><span className="shrink-0 rounded-full bg-orange-50 px-3 py-2 text-sm font-bold text-orange-900">{item.price} ETB</span></div>
          <p className="mt-4 text-sm leading-6 text-gray-600">{item.description}</p>
          <div className="mt-6 flex items-center gap-3 border-t border-[#eee8e0] pt-5"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-700"><MapPin aria-hidden="true" size={17} /></div><div><p className="text-sm font-semibold text-[#2d241e]">{restaurant.name}</p><p className="text-xs text-gray-500">{restaurant.location}</p></div></div>
        </div>
      </section>
    </div>
  );
}
