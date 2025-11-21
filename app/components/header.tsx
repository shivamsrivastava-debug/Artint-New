"use client";
import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "experience"},
    { name: "collection"},
    { name: "visualRealms"},
    { name: "vision"},
    { name: ""},
  ];

  return (
    <div className="fixed top-14 z-10 w-full flex items-center justify-center">
      <nav className="rounded-full relative w-[60%] flex justify-center py-5 border-2 bg-black/70 backdrop-blur-md border-b border-white/20 shadow-lg">
        <ul className="flex gap-12 z-10">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item} passHref>
                <p
                  onClick={() => setActive(item.name)}
                  className={`relative text-lg font-medium transition-all duration-300 tracking-wide cursor-pointer ${
                    active === item.name
                      ? "text-amber-400"
                      : "text-gray-300 hover:text-amber-300"
                  }`}
                >
                  {item.name}
                  {active === item.name && (
                    <span
                      className="absolute left-0 -bottom-1 h-0.5 w-full
                        bg-amber-400 shadow-[0_0_10px_#f59e0b,0_0_20px_#f59e0b]
                        animate-pulse"
                    />
                  )}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default Header;
