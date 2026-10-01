"use client";

import { useMemo, useState } from "react";
import MenuHeader from "./components/menu/menuHeader";
import MenuSearch from "./components/menu/menuSearch";
import CategoryTabs from "./components/menu/categoryTabs";
import MenuCard from "./components/menu/menuCards";
import MenuModal from "./components/menu/menuModal";
import Footer from "./components/layout/footer";
import { menuItems } from "./data/menu";
import { MenuItem } from "./types/menu";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const normalizedSearch = search.trim().toLowerCase();

  const filteredItems = useMemo(() => menuItems.filter((item) => {
    const matchesSearch = !normalizedSearch || [item.name, item.description, item.category].some((value) => value.toLowerCase().includes(normalizedSearch));
    const matchesCategory = selectedCategory === "All" || (selectedCategory === "Popular" ? item.popular : item.category === selectedCategory);
    return matchesSearch && matchesCategory;
  }), [normalizedSearch, selectedCategory]);

  return (
    <div className="flex min-h-screen flex-col bg-[#fbf9f6]">
      <MenuHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-5 pb-16 pt-8 sm:pt-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">Made fresh, served with care</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#2d241e] sm:text-3xl">Explore our menu</h2>
          <p className="mt-2 text-sm text-gray-500">Find something delicious for your day.</p>
        </div>
        <div className="mx-auto mt-7 max-w-2xl"><MenuSearch value={search} onChange={setSearch} /><CategoryTabs selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} /></div>
        <section aria-labelledby="menu-heading" className="mt-9">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div><h2 id="menu-heading" className="text-xl font-semibold text-[#2d241e]">{selectedCategory === "All" ? "All dishes" : selectedCategory}</h2><p className="mt-1 text-sm text-gray-500">{normalizedSearch ? "Search results" : "A little something for everyone"}</p></div>
            <span aria-live="polite" className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-500 shadow-sm">{filteredItems.length} {filteredItems.length === 1 ? "dish" : "dishes"}</span>
          </div>
          {filteredItems.length > 0 ? <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => <MenuCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />)}
          </div> : <div className="rounded-3xl border border-dashed border-[#e4dacf] bg-white px-6 py-16 text-center">
            <p className="text-lg font-semibold text-[#2d241e]">No dishes found</p><p className="mt-2 text-sm text-gray-500">Try another search or browse a different category.</p>
            <button type="button" onClick={() => { setSearch(""); setSelectedCategory("All"); }} className="mt-5 rounded-full bg-[#2d241e] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-800">Show all dishes</button>
          </div>}
        </section>
      </main>
      <Footer />
      <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
