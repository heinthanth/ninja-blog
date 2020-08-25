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
            <div className={cx("col-12", about.desc)}>
                <p>As you know, <b>"Hein Thant Maung Maung"</b> is my legal full name. But to be unique, I took "Hein Thanth" as a nickname. Studying technology at <a href="https://www.uit.edu.mm" target="_blank" className="text-dark font-weight-bold">University of Information Technology</a></p>
                <p>Since I've learned <b>Web Development</b> since the age of 13/14, I have enough experience on Web standard and workflow, and can code in <b>Python, C/C++, Java</b> and have intermediate knowledge and experience on <b>Linux</b>. Currently learning <b>Flutter and iOS development with Swift.</b></p>
                <p>Love cats and passionate about making something new and breaking stuffs! Sometimes, I do penetration testing on <a href="https://hackthebox.eu" target="_blank" className="text-dark font-weight-bold">HackTheBox</a> and make some <b>EDM music</b>. Go to my website <a href="https://heinthanth.com" target="_blank" className="text-dark font-weight-bold">https://heinthanth.com</a> for more!</p>
            </div>
        </div>
    </section>
);

export default About;
