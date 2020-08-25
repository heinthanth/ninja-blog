import Link from "next/link";
import utils from "../sass/components/Utils.module.sass";
const { countOccurrences } = require("../utils/utils");

const TagList = (props) => {
    let count = countOccurrences(props.tags);

    let tags = Object.keys(count).map((tag) => (
        <Link key={tag} href={`/tag/?t=${tag}`} as={`/tag/${tag}`}>
            <a className={utils.tag}>
                {tag}
                {props.withCount ? ` | ${count[tag]}` : null}
            </a>
        </Link>
    ));

    return (
        <React.Fragment>
            <Link key="all" href={`/`}>
                <a className={utils.tag}>
                    all
                    {props.withCount ? ` | ${props.allPost}` : null}
                </a>
            </Link>
            {tags}
        </React.Fragment>
    );
};

export default TagList;
