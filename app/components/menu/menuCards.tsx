import Image from "next/image";
import { ChevronRight, Star } from "lucide-react";
import { MenuItem } from "@/app/types/menu";

interface MenuCardProps { item: MenuItem; onClick: () => void; }

export default function MenuCard({ item, onClick }: MenuCardProps) {
  return (
    <button type="button" onClick={onClick} aria-label={"View " + item.name + " details"}
      className="group w-full overflow-hidden rounded-3xl border border-[#eee8e0] bg-white text-left shadow-[0_4px_18px_rgba(50,35,20,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(50,35,20,0.12)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400/30">
      <div className="relative aspect-[1.45] overflow-hidden bg-[#f3eee8]">
        <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" unoptimized className="object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        {item.popular && <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#38291f] shadow-sm"><Star aria-hidden="true" size={13} className="fill-orange-400 text-orange-400" />Guest favorite</span>}
        <span className="absolute bottom-3 right-3 rounded-full bg-white px-3 py-1.5 text-sm font-bold text-[#2d241e] shadow-md">{item.price} ETB</span>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3"><h3 className="font-semibold text-[#2d241e]">{item.name}</h3><ChevronRight aria-hidden="true" size={18} className="shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-orange-600" /></div>
        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">{item.description}</p>
        <span className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-orange-700">View details</span>
      </div>
    </button>
  );
}
