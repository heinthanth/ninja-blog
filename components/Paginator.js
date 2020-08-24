import { useRouter } from "next/router";
import cx from "classnames";
import Link from "next/link";
import pg from "../sass/components/Paginator.module.sass";

const Paginator = (props) => {
    let baseRoute = props.baseRoute;

    let pattern = /(:[A-Za-z0-9]+)/g;
    let match = baseRoute.match(pattern);

    let href = props.ent;

    if (match) {
        match.forEach((i) => {
            baseRoute = baseRoute.replace(
                i,
                props.baseRouteWith[i.substring(1)]
            );
            href = `${href}?${i.substring(1)}=${props.baseRouteWith[i.substring(1)]}&`;
        });
    } else {
        href = href + "?";
    }

    let items = [];
    if (Number(props.current) - 1 >= 1) {
        items.push(
            <Link
                href={`${href}p=${Number(props.current) - 1}`}
                as={`${baseRoute}p/${Number(props.current) - 1}`}
            >
                <a className={pg.item}>{"<"}</a>
            </Link>
        );
    } else {
        items.push(
            <a style={{ cursor: "pointer" }} className={cx(pg.item)}>
                {"<"}
            </a>
        );
    }
    for (let i = 1; i <= props.maxItem; i++) {
        items.push(
            <Link href={`${href}p=${i}`} as={`${baseRoute}p/${i}`}>
                {props.current == i ? (
                    <a className={cx(pg.item, pg.activeItem)}>{i}</a>
                ) : (
                    <a className={pg.item}>{i}</a>
                )}
            </Link>
        );
    }
    if (Number(props.current) + 1 <= props.maxItem) {
        items.push(
            <Link
                href={`${href}p=${Number(props.current) + 1}`}
                as={`${baseRoute}p/${Number(props.current) + 1}`}
            >
                <a className={pg.item}>{">"}</a>
            </Link>
        );
    } else {
        items.push(
            <a style={{ cursor: "pointer" }} className={cx(pg.item)}>
                {">"}
            </a>
        );
    }
    return <div className={pg.paginationContainer}>{items}</div>;
};

export default Paginator;
