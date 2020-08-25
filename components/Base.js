import Head from "next/head";
import NavBar from "./NavBar";

const Base = (props) => (
    <React.Fragment>
        <Head>
            <title>
                {props.title
                    ? `${props.title} | Hein Thanth`
                    : "H31iUMx49 | Hein Thanth"}
            </title>

            <link rel="icon shortcut" href="/favicon.ico" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/icons/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/icons/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/icons/favicon-16x16.png"
            />
            <link rel="manifest" href="/manifest.json" />
        </Head>
        <NavBar />
        <main>{props.children}</main>
        <footer className="pt-2 pb-4">
            <div className="container">copyright &copy; {new Date().getFullYear()} HIIIIN. All Rights Reserved.</div>
        </footer>
    </React.Fragment>
);

export default Base;
