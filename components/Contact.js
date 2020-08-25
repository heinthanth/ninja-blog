import cx from "classnames";
import contact from "../sass/components/Contact.module.sass";
import utils from "../sass/components/Utils.module.sass";

const Contact = () => (
    <section className="pt-4 pb-3 pb-md-2">
        <h1 className={cx(utils.sectionTitle)}>Get in Touch</h1>
        <p className={cx(utils.sectionInfo, "mb-2")}>
            Just some methods to contact me ...
        </p>
        <ul className={contact.socialLink}>
            <li>
                <a
                    href="https://facebook.com/heinthanth"
                    target="_blank"
                    title="Facebook"
                >
                    <span className="ion-social-facebook"></span>
                </a>
            </li>
            <li>
                <a
                    href="https://instagram.com/heinthanth"
                    target="_blank"
                    title="Instagram"
                >
                    <span className="ion-social-instagram"></span>
                </a>
            </li>
            <li>
                <a
                    href="https://twitter.com/heinthanth"
                    target="_blank"
                    title="Twitter"
                >
                    <span className="ion-social-twitter"></span>
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/heinthanth"
                    target="_blank"
                    title="Github"
                >
                    <span className="ion-social-github"></span>
                </a>
            </li>
            <li>
                <a
                    href="https://hackthebox.eu/profile/244034"
                    target="_blank"
                    title="Hack The Box"
                >
                    <span className="ion-cube"></span>
                </a>
            </li>
            <li>
                <a
                    href="mailto:me@heinthanth.com"
                    target="_blank"
                    title="Email"
                >
                    <span className="ion-android-mail"></span>
                </a>
            </li>
        </ul>
    </section>
);

export default Contact;
