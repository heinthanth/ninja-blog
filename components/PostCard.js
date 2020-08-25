import cx from "classnames";
import Link from "next/link";
import TagList from "./TagList";
import pc from "../sass/components/PostCard.module.sass";

const PostCard = ({ post }) => (
    <article className={cx("col-12 col-md-6", pc.article)}>
        <div className={cx(pc.card)}>
            <div className={cx(pc.articleHeader)}>
                <h3>
                    <Link href={`/post?id=${post.id}`} as={`/post/${post.id}`}>
                        <a
                            className={cx(pc.articleTitle)}
                            dangerouslySetInnerHTML={{ __html: post.title }}
                        ></a>
                    </Link>
                </h3>
            </div>
            <Link href={`/post?id=${post.id}`} as={`/post/${post.id}`}>
                <img
                    className={cx(pc.articleImage)}
                    src={post.imgUrl}
                    alt="HELLO, WORLD"
                />
            </Link>
            <div className={cx(pc.articleFooter)}>
                <div className={cx(pc.tagContainer)}>
                    <TagList tags={post.tags.split(",").map((i) => i.trim())} />
                </div>
                <div className={cx(pc.datetime)}>
                    {post.date}
                </div>
            </div>
        </div>
    </article>
);

export default PostCard;
