const Post = (props) => (
    <h1>{props.post.title}</h1>
);

Post.getInitialProps = async ({ query }) => {
    const id = query.id;
    let res = await fetch(`http://127.0.0.1:8000/posts/${id}`);
    let post = await res.json();

    return {
        post,
    };
};

export default Post;