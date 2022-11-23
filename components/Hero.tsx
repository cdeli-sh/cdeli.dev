import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";

export default function Hero() {
  return (
    <div
      id="top"
      className="flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-4 px-4 pt-4 group"
    >
      <div className="flex flex-col justify-between md:w-3/5 w-full md:h-72 bg-purple-800/50 text-white rounded-lg transition-all duration-200 p-4">
        <div>
          <div className="font-mono text-2xl">
            <span>Je suis Célien, développeur </span>
            <ReactTypingEffect
              text={["web fullstack"].concat(
                [
                  "React",
                  "JavaScript",
                  "TypeScript",
                  "PHP",
                  "Laravel",
                  "Shopify",
                  "NodeJS",
                  "OctoberCMS",
                  "WinterCMS",
                ]
                  .map((value) => ({ value, sort: Math.random() }))
                  .sort((a, b) => a.sort - b.sort)
                  .map(({ value }) => value)
              )}
              speed={100}
              eraseDelay={2000}
              typingDelay={1000}
              eraseSpeed={100}
            />
          </div>
          <div className="mt-4">
            Je développe des sites avec de nombreuses technologies et outils
            tels que{" "}
            <span className="group-hover:text-red-500 transition-all duration-200">
              Laravel
            </span>
            ,{" "}
            <span className="group-hover:text-blue-500 transition-all duration-200">
              NextJS
            </span>{" "}
            ou encore{" "}
            <span className="group-hover:text-green-500 transition-all duration-200">
              Shopify Liquid
            </span>
          </div>
        </div>
        <div className="mt-6 flex space-x-4">
          <Link
            href="#"
            className="block bg-slate-900 text-white px-4 py-2 rounded-lg w-max"
          >
            Contactez-moi
          </Link>
          <Link
            href="https://molecul.fr"
            className="block bg-purple-600 text-white px-4 py-2 rounded-lg w-max"
          >
            Besoin d{"'"}un site ?
          </Link>
        </div>
      </div>
      <div className="md:w-2/5 w-full h-72 bg-blue-400/50 rounded-lg md:hover:w-3/4 transition-all duration-200 bg-center bg-cover bg-[url('/markus-spiske-cvBBO4PzWPg-unsplash.jpg')]"></div>
    </div>
  );
}
