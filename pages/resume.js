import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import "tailwindcss/tailwind.css";
import Tools from "../pages/projects";

export default function Resume() {
  const skills = [
    { name: "Python" },
    { name: "Test Automation" },
    { name: "JavaScript" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "C++" },
    { name: "SQL" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "React.js" },
    { name: "Next.js" },
    { name: "GitHub" },
    { name: "Vercel" },
    { name: "Bootstrap" },
    { name: "Tailwind" },
    // Add more skills here
  ];

  const experience = [
    {
      company: "The Prometheus Group",
      position: "Junior Software Engineer",
      duration: "09/2021 - Present",
      description:
        "Automated repetitive testing tasks using Python to improve efficiency and speed of the QA process for Win32 apps. Performed debugging for code written in C++",
    },
    {
      company: "Transparent Language",
      position: "Software QA Tester",
      duration: "01/2020 - 09/2020",
      description:
        "Executed manual QA processes throughout various development phases across iOS, Android, and Web applications to ensure fast delivery of predictable, high-quality product releases.",
    },
    // Add more experience items here
  ];

  const education = [
    {
      institution: "UNH Coding Bootcamp",
      degree: "Certificate",
      duration: "2022 - 2023",
    },
    {
      institution: "Manchester Community College, NH",
      degree: "Associate of Science in Computer Science",
      duration: "2019 - 2021",
    },
    {
      institution: "University of Tyumen",
      degree: "BA in Linguistics",
      duration: "2014 - 2017",
    },
    // Add more education items here
  ];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="flex flex-col items-center px-4">
        <h1 className="font-bold text-3xl text-center m-4">Resume</h1>
        <hr />

        <a
          href="/resume.pdf"
          target="_blank"
          className="w-64 sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <div className="text-left">
            <div className="-mt-1 text-sm">Download CV </div>
          </div>
        </a>

        <div className="max-w-8xl w-full mx-auto">
          <div className="flex items-start">
            <h2 className="font-bold text-lg text-left mt-4 ml-2 mb-2">
              Summary
            </h2>{" "}
            <div className="max-w-3xl w-full mx-auto bg-gray-200 p-4 rounded-lg mt-4 border-l-4 border-gray-400 pl-8">
              <p className="my-4 text-neutral-800 dark:text-black-200 text-md flex-grow">
                A Junior Software Engineer in Test, showcasing a track record in
                the medical device industry. Proficient in Python and C++,
                holding an Associate of Science degree with a focus on Computer
                Science from Manchester Community College NH. Aspiring to
                venture into frontend React web development.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <h2 className="font-bold text-lg text-left mt-4 ml-4 mb-2">
              My Skills
            </h2>
            <div className="max-w-3xl w-full mx-auto bg-gray-200 p-4 rounded-lg mt-4 border-l-4 border-gray-400 pl-8">
              <div className="grid grid-cols-5 gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-500 text-white py-1 px-2 rounded-full text-center"
                  >
                    <span className="font-bold text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <h2 className="font-bold text-lg text-left mt-4 mb-2">
              Experience
            </h2>

            <div className="max-w-3xl w-full mx-auto bg-gray-200 p-4 rounded-lg mt-4 flex flex-grow border-l-4 border-gray-400 pl-8">
              <ul className="my-4">
                {experience.map((exp) => (
                  <li
                    key={exp.company}
                    className="border border-gray-400 rounded-lg p-4 mt-2"
                  >
                    <h2 className="font-bold text-lg">{exp.company}</h2>
                    <h3 className="text-md font-semibold">{exp.position}</h3>
                    <h2 className="text-sm">{exp.duration}</h2>
                    <p className="text-sm mt-2">{exp.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <h2 className="font-bold text-lg text-left mt-4 ml-2 mb-2">
              Education
            </h2>
            <div className="max-w-3xl w-full mx-auto bg-gray-200 p-4 rounded-lg mt-4 flex flex-grow border-l-4 border-gray-400 pl-8">
              <ul className="my-4">
                {education.map((edu) => (
                  <li key={edu.institution} className="mb-2">
                    <h2 className="font-bold text-lg">{edu.institution}</h2>
                    <h3 className="text-md">{edu.degree}</h3>
                    <h4 className="text-sm">{edu.duration}</h4>
                    <p className="text-sm">{edu.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
