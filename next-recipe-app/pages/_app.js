import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="header">
        <div>
          <Link href="/">
            <a>Next.JS Kitchen 🍍</a>
          </Link>
        </div>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
//followed along to https://www.youtube.com/watch?v=1WmNXEVia8I&t=1s&ab_channel=freeCodeCamp.org
export default MyApp;