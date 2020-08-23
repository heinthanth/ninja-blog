import IndexPage from "../components/IndexPage";

const Index = ({ posts, pid, maxItem }) => {
    return <IndexPage posts={posts} pid={pid} maxItem={maxItem} />;
};

Index.getInitialProps = async ({ query }) => {
    const id = query.id || 1;
    let res = await fetch(`http://192.168.43.241:8000/posts`);
    let posts = await res.json();

    let maxItem = Math.ceil(posts.length / 4);

    res = await fetch(`http://192.168.43.241:8000/posts?_page=${id}&_limit=4`);
    posts = await res.json();

    return {
        posts,
        pid: id,
        maxItem,
    };
};

export default Index;
