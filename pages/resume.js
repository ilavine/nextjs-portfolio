import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import "tailwindcss/tailwind.css";

export default function Resume() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <h1 className="font-bold text-3xl text-center m-4">Resume</h1>
        <hr />
        <p className="my-5 text-neutral-800 dark:text-black-200">
          <div class="box-border h-20 w-20 p-4 border-4 border-teal-400 bg-teal-200">
            <div class="h-full w-full bg-teal-400"></div>
          </div>
          Junior Software Quality Assurance Engineer with a demonstrated history
          of working in the medical device industry. Skilled in Python
          (Programming Language) and Software Quality Assurance. Graduated with
          an Associate of Science focused in Computer Science from Manchester
          Community College NH.
        </p>
        <hr />
      </section>
    </Layout>
  );
}
