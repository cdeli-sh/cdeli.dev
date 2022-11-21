import Link from "next/link";

type props = {
  offset: number;
};

export default function Navbar({ offset }: props) {
  return (
    <nav
      className={
        "flex justify-between text-white bg-slate-900 py-2 px-4 fixed transition-all duration-200  " +
        (offset > 40 ? "rounded-t-lg p-4 w-[calc(100%-2rem)]" : "w-full")
      }
    >
      <span>{"> "}cdeli.dev</span>
      <div className="md:flex space-x-4 hidden">
        <Link href={"#"}>Accueil</Link>
        <Link href={"#projects"}>Projets</Link>
        <Link href={"#"}>Expérience</Link>
        <Link href={"#"}>Contact</Link>
      </div>
      <button className="md:hidden">
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
