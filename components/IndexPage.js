import Base from "../components/Base";
import cx from "classnames";
import TagList from "../components/TagList";
import PostCard from "../components/PostCard";
import index from "../sass/components/Index.module.sass";
import Paginator from "../components/Paginator";

const IndexPage = (props) => (
    <Base title="Home">
        <div className="container pt-3">
            <h1 className={cx(index.sectionTitle)}>Hein's Blog</h1>
            <p className={cx(index.sectionInfo)}>
                Just random articles that I wrote in free times ...
            </p>
            <div className={index.tagList}>
                {/* <TagList tags={props.tags} withCount /> */}
            </div>
            <section className="row">
                {props.posts.map((post) => (
                    <PostCard title={post.title} tags={post.tags} />
                ))}
            </section>
            <Paginator baseRoute="/p" ent="/" maxItem={props.maxItem} current={props.pid} />
        </div>
    </Base>
);

export default IndexPage;
