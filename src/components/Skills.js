import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Node.js",
    "npm",
    "Jest",
    "Enzyme",
  ];

  return (
    <section className="bg-white py-20">
      <div className={roboto.className}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            {skills.map((skill) => (
              <li key={skill} className="text-lg mb-2">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
