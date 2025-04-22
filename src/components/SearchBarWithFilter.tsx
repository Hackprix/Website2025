"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Stall, StallType, STALL_TYPES } from "@/app/stalls/content";
import { useState, useRef, useEffect } from "react";

interface SearchBarWithFilterProps {
  onSearch: (searchTerm: string) => void;
  onTypeFilter: (type: StallType | null) => void;
}

export function SearchBarWithFilter({
  onSearch,
  onTypeFilter,
}: SearchBarWithFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<StallType | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleTypeSelect = (type: StallType) => {
    setSelectedType(type);
    onTypeFilter(type);
    setIsDropdownOpen(false);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedType(null);
    onSearch("");
    onTypeFilter(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8 relative z-70">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search stalls..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 relative z-[9999]"
          />
        </div>
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white flex items-center gap-2 relative z-[9999] w-full sm:w-auto"
          >
            {selectedType || "Type"}
            <svg
              className={`w-4 h-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div 
              ref={dropdownRef}
              className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-full sm:w-48 rounded-md shadow-lg bg-white dark:bg-zinc-900 ring-1 ring-black ring-opacity-5 z-[9999]"
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {STALL_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => handleTypeSelect(type)}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      selectedType === type
                        ? "bg-purple-100 dark:bg-purple-900"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    role="menuitem"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        {(searchTerm || selectedType) && (
          <button
            onClick={clearFilters}
            className="px-4 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors relative z-[998] w-full sm:w-auto"
          >
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
} 