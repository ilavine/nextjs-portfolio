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
      description: "",
    },
    {
      company: "Transparent Language",
      position: "Software QA Tester",
      duration: "01/2020 - 09/2020",
      description: "",
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

      <section className="max-w-4xl mx-auto py-8 px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-center">About Me</h1>
          <hr />
        </div>

        <div class="flex justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <div class="text-left">
              <div class="-mt-1 text-sm">Download CV </div>
            </div>
          </a>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Summary</h2>
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-lg">
              A Junior Software Engineer in Test, showcasing a track record in
              the medical device industry. Proficient in Python and C++, holding
              an Associate of Science degree with a focus on Computer Science
              from Manchester Community College NH. Aspiring to venture into
              frontend React web development.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          <div className="bg-gray-200 p-4 rounded-lg">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-gray-500 text-white py-1 px-2 rounded-full text-center"
                >
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Experience</h2>
          <div className="bg-gray-200 p-4 rounded-lg">
            <ul className="space-y-4">
              {experience.map((exp) => (
                <li key={exp.company}>
                  <h3 className="text-lg font-bold">{exp.company}</h3>
                  <p className="text-md font-semibold">{exp.position}</p>
                  <p className="text-sm">{exp.duration}</p>
                  <p className="text-sm">{exp.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Education</h2>
          <div className="bg-gray-200 p-4 rounded-lg">
            <ul className="space-y-4">
              {education.map((edu) => (
                <li key={edu.institution}>
                  <h3 className="text-lg font-bold">{edu.institution}</h3>
                  <p className="text-md">{edu.degree}</p>
                  <p className="text-sm">{edu.duration}</p>
                  <p className="text-sm">{edu.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
