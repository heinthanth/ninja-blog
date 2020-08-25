import Link from "next/link";
import cx from "classnames";
import nav from "../sass/components/NavBar.module.sass";

const NavBar = (props) => (
    <nav className={cx(nav.navigation)}>
        <div className="container d-flex">
            <Link href="/">
                <a className={cx(nav.logo)}>HIIIIN</a>
            </Link>
            {/* <button className={cx(nav.toggler, "ml-auto")}>
                <svg className={cx("bi", nav.togglerIcon)} fill="currentColor">
                    <use href="/icons/bootstrap-icons.svg#text-indent-right" />
                </svg>
            </button> */}
        </div>
    </nav>
);

export default NavBar;
