import Typewritereffect from "@/components/Typewritereffect";
import Image from "next/image";
import Hero from "@/app/public/assets/dev.gif";

const HomeScreen = () => {
  return (
    <main className="flex flex-col text-center md:flex-row w-full h-[500px] md:px-20 ">
      {/* Container */}
      <div className="w-full mx-auto mt-auto  px-8 flex flex-col justify-center h-full">
        <p className="text-blue-600 text-2xl sm:text-4xl pb-4">
          Hi, my name is
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold dark:text-blue-100 text-green-900 ">
          Abhishek Singh
        </h1>
        <p className="text-blue-600 text-2xl sm:text-4xl py-4">and i am a</p>
        <h1 className="text-4xl sm:text-7xl font-bold dark:text-yellow-400 text-yellow-500">
          <Typewritereffect />
        </h1>
      </div>

      <div className="mx-auto  mt-4 md:mt-32 w-full md:w-full px-4 cursor-pointer   ">
        <Image
          alt="Abhishek Image"
          className="bg-gradient-to-b z-auto   from-cyan-500 to-red-300 dark:from-black dark:to-red-500  rounded-full "
          src={Hero}
        />
      </div>
    </main>
  );
};

export default HomeScreen;
