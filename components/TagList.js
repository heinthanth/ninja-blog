import Link from "next/link";
import utils from "../sass/components/Utils.module.sass";
const { countOccurrences } = require("../utils/utils");

const TagList = (props) => {
    let count = countOccurrences(props.tags);

    return Object.keys(count).map(tag => (
        <Link href={`/tag/?t=${tag}`} as={`/tag/${tag}`}>
            <a key={tag} className={utils.tag}>
                {tag}
                {props.withCount ? ` | ${count[tag]}` : null}
            </a>
        </Link>
    ));
};

export default TagList;
