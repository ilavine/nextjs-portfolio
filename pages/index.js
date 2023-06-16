import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function ArrowIcon() {
  return (
    <svg
      className="mr-2 w-4 h-4"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="about flex items-center justify-center m-36">
        <div className="fn_cs_about_modern">
          <div className="container">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <Image
                    src="/profile.jpeg"
                    width={350}
                    height={350}
                    alt="Picture of the author"
                    className={`rounded-full ${utilStyles.roundedImage}`}
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 pl-12">
                <div className="main_title text-center lg:text-left">
                  <h3 className="text-4xl font-bold text-center mb-6">
                    Yulia Lavine
                  </h3>
                  <div className="flex justify-center items-center">
                    <div className="h-px bg-gray-300 flex-grow"></div>
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-px bg-gray-300"></div>
                      <div
                        className={`mx-4 text-gray-500 ${utilStyles.hoverEffect}`}
                      >
                        <Link
                          className="icon"
                          href="https://github.com/ilavine"
                          passHref
                        >
                          <FontAwesomeIcon
                            icon={faGithub}
                            className="w-6 h-6"
                          />
                        </Link>
                      </div>
                      <div className="w-2 h-px bg-gray-300"></div>
                      <div
                        className={`mx-4 text-gray-500 ${utilStyles.hoverEffect}`}
                      >
                        <Link
                          className="icon"
                          href="https://www.linkedin.com/in/iuliia-lavine/"
                          passHref
                        >
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="w-6 h-6"
                          />
                        </Link>
                      </div>
                      <div className="w-2 h-px bg-gray-300"></div>
                    </div>

                    <div className="h-px bg-gray-300 flex-grow"></div>
                  </div>
                  <p className="text-xl text-center mt-12">
                    Junior Software Engineer at <br></br>{" "}
                    <Link href="https://theprogrp.com/" passHref>
                      <id
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-500"
                      >
                        The Prometheus Group{" "}
                      </id>
                    </Link>
                  </p>
                  <p className="text-xl text-center">and Web Developer.</p>

                  <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-6">
                    <a
                      href="#"
                      class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <div class="text-left">
                        <div class="-mt-1  text-sm ">
                          {" "}
                          <ArrowIcon /> Download CV
                        </div>
                      </div>
                    </a>
                    <a
                      href="/contact"
                      class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <div class="text-left">
                        <div class="-mt-1  text-sm ">
                          {" "}
                          <ArrowIcon />
                          Contact Me
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}