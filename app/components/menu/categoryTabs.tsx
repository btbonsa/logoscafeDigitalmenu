"use client";

import { categories } from "../../data/categories";

interface CategoryTabsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryTabs({ selectedCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <nav aria-label="Menu categories" className="mt-5 -mx-1 overflow-x-auto px-1 pb-1">
      <div className="flex w-max gap-2">
        {categories.map((category) => {
          const selected = selectedCategory === category;
          return <button key={category} type="button" aria-pressed={selected} onClick={() => onCategoryChange(category)}
            className={selected ? "rounded-full bg-[#2d241e] px-4 py-2.5 text-sm font-semibold text-white shadow-sm" : "rounded-full border border-[#e9e2d9] bg-white px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:border-orange-300 hover:text-gray-900"}>
            {category}
          </button>;
        })}
      </div>
    </nav>
  );
}
