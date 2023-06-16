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
    <div className="flex">
      <div className="w-3/4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="p-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <div className="w-1/4 ml-4">
        <Tools onToolClick={handleToolClick} />
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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
      <img
        className="w-1/4 h-64 object-cover"
        src={project.image}
        alt={project.name}
      />
      <div className="p-4 w-3/4">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex">{toolsList}</div>
          <div className="space-x-2">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-gray-400 text-white rounded px-4 py-2 text-sm font-semibold transition-colors duration-300"
            >
              View Repo
            </a>
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-gray-400 text-white rounded px-4 py-2 text-sm font-semibold transition-colors duration-300"
            >
              View App
            </a>
          </div>
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

  const handleToolClick = (link) => {
    if (onToolClick) {
      onToolClick(link);
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg mt-4">
      <h4 className="text-lg font-semibold mb-2 text-center">Tools</h4>
      <ul className="list-disc list-inside">
        {tools.map((tool) => (
          <li key={tool.name} className="text-gray-700">
            <button
              type="button"
              className="hover:text-blue-500"
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

      <section>
        <h1 className="font-bold text-3xl text-center mt-6">Projects</h1>
        <hr />

        <ProjectMap />
      </section>
    </Layout>
  );
}
   