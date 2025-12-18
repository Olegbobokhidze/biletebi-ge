"use client";

import Link from "next/link";
import { Search, User } from "lucide-react";
import { BiletebiIcon } from "@/assets/BiletebiIcon";

export default function Navbar() {
  return (
    <nav className="h-26 fixed top-0 z-10 w-full bg-background flex items-center justify-center py-4">
      <div className="w-full max-w-384 px-4 flex items-center justify-center">
        <Link
          href="/"
          className="text-xl flex items-center h-10 w-40 font-bold"
        >
          <BiletebiIcon />
        </Link>

        <div className="relative ml-20 w-[52%]">
          <input
            type="text"
            placeholder="ძიება"
            className="w-full h-14 rounded-full border pl-4 pr-10 text-sm outline-none focus:border-green-500 transition bg-white text-background"
          />

          <Search
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

        <div className="ml-auto flex items-center gap-6">
          {/* LOGIN */}
          <button className="flex items-center gap-2 text-sm cursor-pointer font-medium transition">
            <User size={18} />
            შესვლა
          </button>

          {/* LANGUAGE */}
          <button className="text-sm font-semibold border px-3 py-1 cursor-pointer rounded-md transition">
            ENG
          </button>
        </div>
      </div>
    </nav>
  );
}
