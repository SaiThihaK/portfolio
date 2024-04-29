import Marquee from "react-fast-marquee";
const projects: string[] = ["Viabells", "Spirite", "BMPS"];
const skill1: string[] = [
  "reactjs",
  "nextjs",
  "vuejs",
  "reactnativejs",
  "nodejs",
  "mongodb",
  "mysql",
];
const skill2: string[] = [
  "tailwind",
  "shadcn",
  "mui,antd",
  "framermotion",
  "gsap",
  "swr",
  "reactquery",
  "drizzle",
  "prisma",
];
const ProjectPage = () => {
  return (
    <main className="w-full flex flex-col gap-y-10">
      <div className="w-full flex justify-center h-[70dvh]   flex-col gap-y-6">
        <div className="text-8xl leading-20">
          Building the Interface of the Future
        </div>
        <div className="font-normal w-full">
          Hello! I’m Sai Thiha Kyaw, a passionate full-stack developer with a
          solid foundation in both front-end and back-end technologies. With
          three years of hands-on experience, I specialize in turning complex
          problems into simple, beautiful, and intuitive designs.
        </div>
        <div className="w-full border-2 border-black dark:border-white rounded-full flex justify-center items-center p-5 uppercase font-normal text-xl dark:hover:bg-slate-800 hover:bg-slate-200">
          Let's Connect With Me
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-6 h-[20dvh] justify-center">
        <Marquee speed={200}>
          {skill1.map((skill, index) => (
            <div className="px-6 uppercase text-4xl font-thin" key={index}>
              {skill}
            </div>
          ))}
        </Marquee>
        <Marquee speed={200} direction="right">
          {skill2.map((skill, index) => (
            <div className="px-6 uppercase text-4xl font-thin" key={index}>
              {skill}
            </div>
          ))}
        </Marquee>
      </div>
      <div className="w-full">
        <h2 className="text-start text-4xl tracking-wider font-extrabold uppercase">
          Experience
        </h2>
        {projects.map((project, index) => (
          <div
            className="flex flex-col  py-4 border-b-[7px] border-b-b;acl dark:border-b-white"
            key={index}
          >
            <div className="flex justify-between items-start flex-col md:flex-row w-full">
              <div className="font-bold">
                {(index + 1).toString().padStart(2, "0")}
              </div>
              <div className="text-8xl text-start md:center py-4 hover:translate-x-6 transition duration-500">
                {project}
              </div>
              <div className="flex flex-col">
                <div className="font-bold uppercase">
                  Senior FullStack Developer
                </div>
                <div className="opacity-70">1yr and 3months</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectPage;
