import Link from "next/link";
import { useState } from "react";

type props = {
  offset: number;
  openMenu: (state: boolean) => void;
};

const menu = [
  {
    name: "Accueil",
    href: "#top",
  },
  {
    name: "Projets",
    href: "#projects",
  },
  {
    name: "Expérience",
    href: "#experiences",
  },
  {
    name: "Etudes",
    href: "#etudes",
  },
];

export default function Navbar({ offset, openMenu }: props) {
  return (
    <nav
      className={
        "flex justify-between text-white bg-slate-900 py-2 px-4 fixed transition-all duration-200  " +
        (offset > 40 ? "rounded-t-lg p-4 w-[calc(100%-2rem)]" : "w-full")
      }
    >
      <span>{"> "}cdeli.dev</span>
      <div className="md:flex space-x-4 hidden">
        {menu.map((item, i) => (
          <Link href={item.href} key={i}>
            {item.name}
          </Link>
        ))}
      </div>
      <button className="md:hidden" onClick={() => openMenu(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
  );
}

type BurgerProps = {
  state: boolean;
  setState: (state: boolean) => void;
};

export function Burger({ state, setState }: BurgerProps) {
  if (state) {
    return (
      <div
        className="fixed top-0 h-screen w-screen bg-slate-800 z-[99] flex flex-col items-center text-white text-2xl space-y-2"
        onClick={() => setState(false)}
      >
        <div className="h-[40px] w-full flex justify-end items-center text-white px-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {menu.map((item, i) => (
          <Link href={item.href} key={i}>
            {item.name}
          </Link>
        ))}
      </div>
    );
  }
}
