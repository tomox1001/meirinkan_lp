"use client";

import { useState } from "react";

const navItems = [
  { label: "明倫館について", href: "#about" },
  { label: "こんな子を歓迎", href: "#welcome" },
  { label: "稽古案内", href: "#practice" },
  { label: "体験のご案内", href: "#trial" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-offwhite/95 backdrop-blur-sm border-b border-ai/10">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14 md:h-16">
        <a href="#" className="font-serif text-lg md:text-xl font-bold text-ai">
          明倫館 剣道クラブ
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-darkgray hover:text-ai transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#trial"
            className="text-sm font-bold text-white bg-shu hover:bg-shu-dark px-5 py-2 rounded-lg transition-colors"
          >
            体験申込み
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="メニューを開く"
          aria-expanded={isOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-ai transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-ai transition-opacity ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-ai transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-offwhite border-t border-ai/10 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-base text-darkgray hover:text-ai py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#trial"
            onClick={() => setIsOpen(false)}
            className="block text-center font-bold text-white bg-shu hover:bg-shu-dark px-5 py-3 rounded-lg transition-colors"
          >
            体験申込み
          </a>
        </nav>
      )}
    </header>
  );
}
