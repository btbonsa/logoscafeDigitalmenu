"use client";

import { Search, X } from "lucide-react";

interface MenuSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function MenuSearch({ value, onChange }: MenuSearchProps) {
  return (
    <div className="relative">
      <label htmlFor="menu-search" className="sr-only">Search the menu</label>
      <Search aria-hidden="true" size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input id="menu-search" type="search" value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search dishes or ingredients" autoComplete="off"
        className="h-[52px] w-full rounded-2xl border border-[#e9e2d9] bg-white pl-12 pr-12 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10" />
      {value && <button type="button" onClick={() => onChange("")} className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-gray-400 transition hover:bg-gray-100 hover:text-gray-700" aria-label="Clear search"><X size={18} /></button>}
    </div>
  );
}
