import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/150",
      url: "#",
    },
    {
      name: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/150",
      url: "#",
    },
    {
      name: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/150",
      url: "#",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className={roboto.className}>
        <div className="container mx-auto px-40">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-white p-4 rounded-lg shadow">
                <Image
                  src={project.image}
                  alt={project.name}
                  width="500"
                  height="300"
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-lg mb-4">{project.description}</p>
                <a
                  href={project.url}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Visit project
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
