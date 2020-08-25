import Base from "../components/Base";
import TagList from "../components/TagList";
import Error from "next/error";
import cx from "classnames";
import pt from "../sass/components/Post.module.sass";

const Post = (props) => {
    if(props.errorCode) return <Error statusCode={props.errorCode} />

    return (
        <Base>
            <article className={"container"}>
                <h1 className="mb-3">{props.post.title}</h1>
                <div
                    className="mb-3"
                    style={{
                        height: 300,
                        backgroundImage: `url('${props.post.imgUrl}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                ></div>
                <div className="mt-4 mb-4 d-flex">
                    <TagList tags={props.post.tags.split(",").map((i) => i.trim())} />
                    <div className="ml-auto">{props.post.created_at}</div>
                </div>
                <div
                    className={cx("font-normal mb-3", pt.content)}
                    dangerouslySetInnerHTML={{ __html: props.post.content }}
                ></div>
            </article>
        </Base>
    );
};

Post.getInitialProps = async ({ query }) => {
    const id = query.id;
    let res = await fetch(`http://127.0.0.1:8000/posts/${id}`);
    let post = await res.json();

    if (Object.keys(post).length === 0 && post.constructor === Object) return { errorCode: 404  };
    return {
        post,
    };
};

export default Post;
