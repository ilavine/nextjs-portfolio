import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import emailjs from "emailjs-com";

export function ContactMe() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_c84dmmi",
        "template_i62umt9",
        e.target,
        "scLqnv0zDQ3riuiXe"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.text);
        // Display success message
        toast.success("Email sent successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });

        // Reset form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="max-w-screen-md mx-auto p-5 mt-4">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="grid-first-name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              First Name
            </label>
            <input
              id="grid-first-name"
              type="text"
              placeholder="Name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="grid-last-name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Last Name
            </label>
            <input
              id="grid-last-name"
              type="text"
              placeholder="Last Name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="grid-email"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Email Address
            </label>
            <input
              id="grid-email"
              type="email"
              placeholder="********@*****.**"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-              3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="grid-password"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Your Message
            </label>
            <textarea
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></textarea>
            <button
              className="shadow bg-gray-900 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <h1 className="font-bold text-3xl text-center m-4">Contact Me</h1>
        <hr />

        <div className="max-w-screen-md mx-auto p-5 m-4 rounded overflow-hidden shadow-lg border-2 mx-auto text-center">
          <p className="text-gray-700 text-base">
            <span className="font-bold float-left">Cell:</span>
            <span className="float-right">(781) 428 - 1989</span>
            <br />
            <span className="font-bold float-left">Email:</span>
            <span className="float-right">yulia.lavine@gmail.com</span>
            <br />
            <span className="font-bold float-left">Location:</span>
            <span className="float-right">Dover, New Hampshire</span>
          </p>
        </div>

        <ContactMe />
      </section>
    </Layout>
  );
}
