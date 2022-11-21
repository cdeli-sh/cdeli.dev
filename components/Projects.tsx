import projects from "../content/projects";

export default function Projects() {
  return (
    <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 gap-4 p-4 pt-0">
      {projects.map((project, i) => (
        <div
          key={i}
          className="w-full flex flex-col justify-between md:h-72 bg-[rgb(248,244,233)]/80 rounded-lg transition-all duration-200 p-4 group overflow-hidden relative"
          style={{ backgroundColor: project.color }}
        >
          <div className="flex h-3/4 items-center justify-center space-x-4">
            {project.pictures.map((img, j) => (
              <img
                key={j}
                src={"/projets" + img}
                className="object-contain object-center rounded-lg h-full"
                alt=""
              />
            ))}
          </div>

          <div className="h-[calc(25%-1rem)] absolute w-[calc(100%-1rem)] bottom-0 left-0 bg-slate-800/25 group-hover:bg-slate-800 text-center p-4 m-2 rounded-lg text-white transition-all duration-200">
            <span className="group-hover:translate-y-[0.2rem] translate-y-1/2 transition-all duration-200 absolute text-white-500 bottom-1/2 left-0 w-full text-center">
              {project.name}
            </span>
            <span
              className={`absolute opacity-0 -bottom-full group-hover:bottom-2 group-hover:opacity-100 left-0 w-full text-center text-sm transition-all duration-200 text-${project.techno.color}`}
            >
              {project.techno.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
