import cx from "classnames";
import about from "../sass/components/About.module.sass";
import utils from "../sass/components/Utils.module.sass";

const About = () => (
    <section className="pt-3">
        <h1 className={utils.sectionTitle}>See who I am</h1>
        <p className={cx(utils.sectionInfo)}>
            I use JS, but not a JS lover but a PHP's huge fan ... LOL
        </p>
        <div className="row">
            <div className={cx("col-12 col-md-4 col-lg-3")}>
                <img
                    src="/me.png"
                    className={cx(about.mePic)}
                    alt="Hein Thanth"
                />
            </div>
            <div className={cx("col-12 col-md-8 col-lg-9", about.desc)}>
                <p>As you know, "Hein Thant Maung Maung" is my legal full name. But to be unique, I took "Hein Thanth" as a nickname.</p>
                <p>Since I've learned Web Development since the age of 13/14, I have enough experience on Web standard and workflow, and can code in Python, C/C++, Java and have intermediate knowledge and experience on Linux.</p>
                <p>Love cats and passionate about making something new and breaking stuffs! Sometimes, I do penetration testing on HackTheBox and make some EDM music.</p>
            </div>
        </div>
    </section>
);

export default About;
