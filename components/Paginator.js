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
            href = `${href}?${i.substring(1)}=${
                props.baseRouteWith[i.substring(1)]
            }&`;
        });
    } else {
        href = href + "?";
    }

    let items = [];
    if (Number(props.current) - 1 >= 1) {
        items.push(
            <Link
                key={0}
                href={`${href}p=${Number(props.current) - 1}`}
                as={`${baseRoute}p/${Number(props.current) - 1}`}
            >
                <a className={pg.item}>{"<"}</a>
            </Link>
        );
    } else {
        items.push(
            <a key={0} style={{ cursor: "pointer" }} className={cx(pg.item)}>
                {"<"}
            </a>
        );
    }
    for (let i = 1; i <= props.maxItem; i++) {
        items.push(
            <Link key={i} href={`${href}p=${i}`} as={`${baseRoute}p/${i}`}>
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
                key={Number(props.maxItem) + 1}
                href={`${href}p=${Number(props.current) + 1}`}
                as={`${baseRoute}p/${Number(props.current) + 1}`}
            >
                <a className={pg.item}>{">"}</a>
            </Link>
        );
    } else {
        items.push(
            <a
                key={Number(props.maxItem) + 1}
                style={{ cursor: "pointer" }}
                className={cx(pg.item)}
            >
                {">"}
            </a>
        );
    }
    return (
        <div className={pg.container}>
            <div className={pg.itemsContainer}>{items}</div>
            <button className={pg.toggleMoveBottom} onClick={() => {props.setPaginatorInBottom(!props.PaginatorInBottom)}}>
                <svg className={cx("bi", pg.toggleMoveBottomIcon)} fill="currentColor">
                    {props.PaginatorInBottom ? (
                        <use href="/icons/bootstrap-icons.svg#arrow-bar-up" />
                    ) : (
                        <use href="/icons/bootstrap-icons.svg#arrow-bar-down" />
                    )}
                </svg>
            </button>
        </div>
    );
};

export default Paginator;
