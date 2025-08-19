import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({
  title,
  backgroundImg,
  skill,
  projectUrl,
  source,
}: any) => {
  return (
    <div className="relative flex items-center justify-center w-full h-[300px] sm:h-[350px] md:h-[400px] shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] transition-all duration-300 ease-in-out">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt={`Screenshot of ${title} project`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl text-white font-bold tracking-wider">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-white mt-2 mb-4">{skill}</p>
          <div className="flex justify-center gap-4 px-4">
            <Link href={projectUrl} passHref>
              <button className="px-4 py-2 rounded-lg bg-white text-gray-700 font-semibold hover:bg-gray-100 transition-colors duration-200">
                Demo
              </button>
            </Link>
            <Link href={source} passHref>
              <button className="px-4 py-2 rounded-lg bg-white text-gray-700 font-semibold hover:bg-gray-100 transition-colors duration-200">
                GitHub
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

// className="rounded-xl group-hover:opacity-10"
