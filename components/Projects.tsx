import Link from "next/link";
import { type } from "os";
import projects from "../content/projects";

export default function Projects() {
  return (
    <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 gap-4 px-4">
      {projects.map((project, i) => (
        <div
          key={i}
          className="w-full flex flex-col justify-between md:h-72 bg-[rgb(248,244,233)]/80 rounded-lg transition-all duration-200 p-4 group overflow-hidden relative"
          style={{ backgroundColor: project.color }}
        >
          <div className="flex mb-16 items-center justify-center md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0 md:h-48">
            {project.pictures.map((img, j) => (
              <img
                key={j}
                src={"/projets" + img}
                className="object-contain object-center rounded-lg h-min max-h-[50vh] md:max-h-full"
                alt=""
              />
            ))}
          </div>

          <LinkToProject href={project.url}>
            <span className="group-hover:translate-y-[0.2rem] translate-y-1/2 transition-all duration-200 absolute text-white-500 bottom-1/2 left-0 w-full text-center">
              {project.name}
            </span>
            <span
              className={`absolute opacity-0 -bottom-full group-hover:bottom-2 group-hover:opacity-100 left-0 w-full text-center text-sm transition-all duration-200 text-${project.techno.color}`}
            >
              {project.techno.name}
            </span>
          </LinkToProject>
        </div>
      ))}
    </div>
  );
}

type LinkToProjectProps = {
  href: string;
  children: React.ReactNode;
};

function LinkToProject({ children, href }: LinkToProjectProps) {
  if (href == "#") {
    return (
      <div className="h-16 absolute w-[calc(100%-1rem)] bottom-0 left-0 bg-slate-800/25 group-hover:bg-slate-800 text-center p-4 m-2 rounded-lg text-white transition-all duration-200">
        {children}
      </div>
    );
  }
  return (
    <Link
      href={href}
      target="_blank"
      className="h-16 absolute w-[calc(100%-1rem)] bottom-0 left-0 bg-slate-800/25 group-hover:bg-slate-800 text-center p-4 m-2 rounded-lg text-white transition-all duration-200"
    >
      {children}
    </Link>
  );
}
