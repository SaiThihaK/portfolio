import { ArrowUpRight } from "lucide-react";

const projects: string[] = [
  "/ Tee up",
  "/ The Dev",
  "/ KyawZayarLynn-architect",
];
const ProjectPage = () => {
  return (
    <main className="w-full h-screen">
      <div className="w-full py-4">
        <h2 className="text-center text-4xl tracking-wider font-extrabold uppercase ">
          Projects
        </h2>
        {projects.map((project, index) => (
          <div
            className="flex justify-between py-4 border-b-[0.5px] border-b-gray-400 opacity-45 hover:opacity-100 transition-opacity ease-linear duration-300"
            key={index}
          >
            <div>
              <h2 className="text-4xl font-extrabold">{project}</h2>
            </div>
            <ArrowUpRight className="w-20 h-10" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectPage;
