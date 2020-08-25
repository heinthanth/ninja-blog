import { useState } from "react";
import Base from "../components/Base";
import cx from "classnames";
import TagList from "../components/TagList";
import PostCard from "../components/PostCard";
import index from "../sass/components/Index.module.sass";
import utils from "../sass/components/Utils.module.sass";
import Paginator from "../components/Paginator";
import About from "./About";
import Contact from "./Contact";

const IndexPage = (props) => {
    const [PaginatorInBottom, setPaginatorInBottom] = useState(true);
    return (
        <Base title="Home">
            <div className="container pt-3">
                <h1 className={cx(utils.sectionTitle)}>Hein's Blog</h1>
                <p className={cx(utils.sectionInfo)}>
                    Just random articles that I wrote in free times ...
                </p>
                <div className={index.tagList}>
                    <TagList allPost={props.allPost.length} tags={props.allTags} withCount />
                </div>
                <div className={index.moveableContainer}>
                    <div
                        className={cx(
                            index.moveablePingator,
                            `${PaginatorInBottom ? index.inBottom : ""}`
                        )}
                    >
                        <Paginator
                            PaginatorInBottom={PaginatorInBottom}
                            setPaginatorInBottom={setPaginatorInBottom}
                            baseRoute={props.baseRoute}
                            baseRouteWith={props.baseRouteWith}
                            ent={props.ent}
                            maxItem={props.maxItem}
                            current={props.pid}
                        />
                    </div>
                    <section className={cx("row", index.moveableContent)}>
                        {props.posts.map((post) => (
                            <PostCard
                                key={post.id}
                                title={post.title}
                                date={post.created_at}
                                tags={post.tags.split(",").map((i) => i.trim())}
                            />
                        ))}
                    </section>
                </div>
                <div className={index.linebreak} />
                <About />
                <Contact />
            </div>
        </Base>
    );
};

export default IndexPage;
