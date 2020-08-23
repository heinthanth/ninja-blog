import Link from "next/link";
import utils from "../sass/components/Utils.module.sass";

const TagList = (props) =>
    props.tags.map((tag) => (
        <Link href={tag.to}>
            <a key={tag.id} className={utils.tag}>
                {tag.name}
                {props.withCount ? ` | ${tag.child}` : null}
            </a>
        </Link>
    ));

export default TagList;
