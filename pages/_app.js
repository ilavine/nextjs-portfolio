import "../styles/global.css";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
