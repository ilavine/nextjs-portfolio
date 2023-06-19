import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import ProjectList from "../posts/ProjectList";

export function ProjectMap() {
  const [selectedTool, setSelectedTool] = useState(null);

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  const filteredProjects = selectedTool
    ? ProjectList.filter((project) => project.tools.includes(selectedTool))
    : ProjectList;

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 mt-4 md:mt-0 md:order-2">
        <Tools onToolClick={handleToolClick} />
      </div>
      <div className="w-full md:w-3/4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="p-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectCard({ project }) {
  const toolsList = project.tools.map((tool, index) => (
    <span
      key={index}
      className="inline-block bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded mr-1"
    >
      {tool}
    </span>
  ));

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <img
          className="h-64 object-fit"
          src={project.image}
          alt={project.name}
        />
      </div>
      <div className="p-4 w-full md:w-2/3">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-2 md:mb-0 flex flex-wrap gap-1">{toolsList}</div>
         
        </div>
        {/* Add buttons at the bottom */}
        <div className="mt-4 flex justify-end gap-1">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-400 text-white rounded px-4 py-2 text-xs font-semibold transition-colors duration-300"
          >
            View Repo
          </a>
          <a
            href={project.deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-400 text-white rounded px-4 py-2 text-xs font-semibold transition-colors duration-300"
          >
            View App
          </a>
        </div>
      </div>
    </div>
  );
}

export function Tools({ onToolClick }) {
  const tools = [
    { name: "HTML5", link: "/html" },
    { name: "CSS", link: "/css" },
    { name: "JavaScript", link: "/javascript" },
    { name: "Node.js", link: "/nodejs" },
    { name: "Sequelize", link: "/sequelize" },
    { name: "MongoDB", link: "/mongodb" },
    { name: "React.js", link: "/react" },
  ];

  const [selectedTool, setSelectedTool] = useState(null);

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
    if (onToolClick) {
      onToolClick(tool);
    }
  };

  const handleSelectAll = () => {
    setSelectedTool(null);
    if (onToolClick) {
      onToolClick(null);
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg mt-4">
      <h4 className="text-lg font-semibold mb-2 text-center bg-gray-400">
        Tools
      </h4>
      <ul className="flex flex-wrap justify-center">
        <li
          className={`inline-block mb-2 mr-2 ${
            selectedTool === null
              ? "bg-gray-500 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded px-2 py-1 text-sm font-semibold transition-colors duration-300 hover:bg-gray-400 hover:text-white`}
        >
          <button
            type="button"
            className="w-full text-center"
            onClick={handleSelectAll}
          >
            Select All
          </button>
        </li>
        {tools.map((tool) => (
          <li
            key={tool.name}
            className={`inline-block mb-2 mr-2 ${
              selectedTool === tool.name
                ? "bg-gray-500 text-white"
                : "bg-gray-200 text-gray-800"
            } rounded px-2 py-1 text-sm font-semibold transition-colors duration-300 hover:bg-gray-400 hover:text-white`}
          >
            <button
              type="button"
              className="w-full text-center"
              onClick={() => handleToolClick(tool.name)}
            >
              {tool.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="container mx-auto">
        <h1 className="font-bold text-3xl text-center m-4">Projects</h1>
        <hr />

        <ProjectMap />
      </section>
    </Layout>
  );
}
