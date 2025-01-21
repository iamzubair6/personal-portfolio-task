"use client";
import { categories, projects } from "@/data/localData";
import { ProjectCategory } from "@/types/propType";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("Web Design");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects?.filter((project) => project?.category === activeCategory);

  return (
    <section id="projects" className="pb-[60px] md:pb-[120px]">
      <div className="text-center space-y-4 mb-14">
        <h2 className="text-display1-mobile md:text-display1 font-semibold pb-5">
          My Projects
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-text-md-mobile md:text-text-md">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-24">
        {categories?.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-3 rounded-xl text-h5-mobile font-thin transition-all md:text-h5 ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-bgSecondary border border-borderColor text-black hover:border-orange-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project?.id}
            className="group cursor-pointer  p-4 rounded-2xl"
          >
            <div className="relative overflow-hidden rounded-xl mb-6">
              <Image
                src={project?.image}
                alt={project?.title}
                width={800}
                height={600}
                className="w-full aspect-[1/1] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-4 px-2">
              <div className="text-orange-500 text-text-base-mobile md:text-text-base font-medium">
                {project?.category}
              </div>
              <h3 className="text-h5-mobile md:text-h5 font-bold">
                {project?.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
