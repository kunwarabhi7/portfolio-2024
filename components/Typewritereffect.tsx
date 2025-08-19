"use client";
import Typewriter from "typewriter-effect";

const Typewritereffect = () => {
  const String = [
    "Learner",
    "Full Stack Developer",
    "Backend Developer",
    "Frontend Developer",
  ];
  return (
    <Typewriter
      options={{
        strings: String,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Typewritereffect;
