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
        </Head>
        <NavBar />
        <main>{props.children}</main>
    </React.Fragment>
);

export default Base;
