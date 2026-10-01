import Image from "next/image";
import { Clock3, MapPin } from "lucide-react";
import { restaurant } from "../../data/restaurant";
import logo from "../../../public/images/restaurant/logo.jpeg";

export default function MenuHeader() {
  return (
    <header className="relative overflow-hidden bg-[#241b16] text-white">
      <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-10 pt-8 text-center sm:pb-12 sm:pt-10">
        <Image src={logo} alt={restaurant.name + " logo"} width={76} height={76} priority className="h-[76px] w-[76px] rounded-full border-2 border-white/20 object-cover shadow-xl" />
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">Welcome to</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{restaurant.name}</h1>
        <p className="mt-2 text-sm text-white/65">{restaurant.tagline}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/75">
          <span className="inline-flex items-center gap-2"><MapPin aria-hidden="true" size={15} className="text-orange-300" />{restaurant.location}</span>
          <span className="inline-flex items-center gap-2"><Clock3 aria-hidden="true" size={15} className="text-orange-300" />{restaurant.isOpen ? "Open today" : "Currently closed"}</span>
        </div>
        <span className="mt-7 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/75">GOOD FOOD, GOOD COMPANY</span>
      </div>
    </header>
  );
}
