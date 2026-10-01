import { MapPin, Phone } from "lucide-react";
import { restaurant } from "../../data/restaurant";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#241b16] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-2 sm:items-end">
        <div><p className="text-lg font-semibold">{restaurant.name}</p><p className="mt-2 text-sm text-white/55">{restaurant.tagline}</p><p className="mt-6 text-xs text-white/40">© {new Date().getFullYear()} {restaurant.name}. All rights reserved.</p></div>
        <div className="flex flex-col gap-3 text-sm text-white/70 sm:items-end">
          <span className="inline-flex items-center gap-2"><MapPin aria-hidden="true" size={16} className="text-orange-300" />{restaurant.location}</span>
          <a href={"tel:" + restaurant.phone.replace(/\s/g, "")} className="inline-flex items-center gap-2 transition hover:text-white"><Phone aria-hidden="true" size={16} className="text-orange-300" />{restaurant.phone}</a>
        </div>
      </div>
    </footer>
  );
}
