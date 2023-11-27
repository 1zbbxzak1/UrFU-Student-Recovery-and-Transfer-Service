"use client";
import React, { useTransition, useState } from "react";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import TagButton from "./TagButton";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Восстановление на бюджетную форму обучения",
    description: "Recovery 1 description",
    tag: ["Восстановление"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Восстановление на контрактую форму обучения",
    description: "Recovery 2 description",
    tag: ["Восстановление"],
    gitUrl: "https://www.wikipedia.org",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Перевод на бюджетную форму обучения с контрактной",
    description: "Transfer 1 description",
    tag: ["Перевод"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Перевод на другое направление внутри института с бюджета на бюджет",
    description: "Transfer 1 description",
    tag: ["Перевод"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Перевод на другое направление внутри института с бюджета на контракт",
    description: "Transfer 1 description",
    tag: ["Перевод"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Перевод на другое направление в другой институт с бюджета на бюджет",
    description: "Transfer 1 description",
    tag: ["Перевод"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Перевод на другое направление в другой институт с бюджета на контракт",
    description: "Transfer 1 description",
    tag: ["Перевод"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("recovery");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const [tag, setTag] = useState("Восстановление");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="text-zinc-700" id="about">
      <div className="relative h-[1px] top-[405px] mr-3.5 bg-neutral-400"></div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center mt-72 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-center flex flex-col h-full">
          <div className="flex flex-row ml-[498px] lowercase">
          <TagButton
            name="Восстановление"
            onClick={handleTagChange}
            isSelected={tag === "Восстановление"}
          >
            Восстановление
          </TagButton>
          <TagButton
            name="Перевод"
            onClick={handleTagChange}
            isSelected={tag === "Перевод"}
          >
            Перевод
          </TagButton>
          </div>
        </div>
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
      <br/>
      <br/>
    </section>
  );
};

export default AboutSection;
