"use client";
import React, { useState } from "react";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import TagButton from "./TagButton";
import { motion, useInView } from "framer-motion";

const cardData = [
  {
    id: 1,
    title: "Восстановление на бюджетную форму обучения",
    description: "Recovery 1 description",
    tag: ["Восстановление"],
    gitUrl: "/recovery/recovery-first",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Восстановление на контрактую форму обучения",
    description: "Recovery 2 description",
    tag: ["Восстановление"],
    gitUrl: "/recovery/recovery-second",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Перевод на бюджетную форму обучения с контрактной",
    description: "Transfer 1 description",
    tag: ["Перевод"],
    gitUrl: "/transfer/transfer-first",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Перевод на другое направление внутри института с бюджета на бюджет",
    description: "Transfer 2 description",
    tag: ["Перевод"],
    gitUrl: "/transfer/transfer-second",
    previewUrl: "/",
  },
  {
    id: 5,
    title:
      "Перевод на другое направление внутри института с бюджета на контракт",
    description: "Transfer 3 description",
    tag: ["Перевод"],
    gitUrl: "/transfer/transfer-third",
    previewUrl: "/",
  },
  {
    id: 6,
    title:
      "Перевод на другое направление в другой институт с бюджета на бюджет",
    description: "Transfer 4 description",
    tag: ["Перевод"],
    gitUrl: "/transfer/transfer-fourth",
    previewUrl: "/",
  },
  {
    id: 7,
    title:
      "Перевод на другое направление в другой институт с бюджета на контракт",
    description: "Transfer 5 description",
    tag: ["Перевод"],
    gitUrl: "/transfer/transfer-fifth",
    previewUrl: "/",
  },
];

const AboutSection = () => {

  const [tag, setTag] = useState("Восстановление");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = cardData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="text-zinc-700" id="about">
      <div className="items-center px-12 py-12 sm:py-16 xl:px-16">
        <div className="text-center flex flex-col items-center mb-0 lg:mb-0 h-full">
          <div className="flex flex-row lowercase">
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
          <div className="w-full h-[1px] bg-[#D3D3D3]" />
        </div>
      </div>
      <ul ref={ref} className="mx-[64px] grid md:grid-cols-3 gap-4 md:gap-12">
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
    </section>
  );
};

export default AboutSection;
