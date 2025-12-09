"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6">
      <Link href="/" className="text-xl font-bold tracking-wide">
        Pushk<span className="text-neon">Chain</span>
      </Link>

      <div className="hidden md:flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
        <ThemeToggle />
      </div>

      {/* Mobile */}
      <div className="md:hidden flex gap-4 items-center">
        <ThemeToggle />
      </div>
    </nav>
  );
}
