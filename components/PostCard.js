import cx from "classnames";
import Link from "next/link";
import TagList from "./TagList";
import pc from "../sass/components/PostCard.module.sass";

const PostCard = (props) => (
    <article className={cx("col-12 col-md-6", pc.article)}>
        <div className={cx(pc.card)}>
            <div className={cx(pc.articleHeader)}>
                <h3>
                    <Link href="/post/1">
                        <a
                            className={cx(pc.articleTitle)}
                            dangerouslySetInnerHTML={{ __html: props.title }}
                        ></a>
                    </Link>
                </h3>
            </div>
            <Link href="/post/1">
                <img
                    className={cx(pc.articleImage)}
                    src="https://i.picsum.photos/id/604/536/354.jpg?hmac=zUQlGas-vWNrCG1R1mr5Obj72N05qiQfwedkiNrZaqw"
                    alt="HELLO, WORLD"
                />
            </Link>
            <div className={cx(pc.articleFooter)}>
                <div className={cx(pc.tagContainer)}>
                    <TagList tags={props.tags} />
                </div>
                <div className={cx(pc.datetime)}>
                    {new Date().toLocaleString()}
                </div>
            </div>
        </div>
    </article>
);

export default PostCard;
