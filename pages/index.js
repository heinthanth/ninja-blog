import IndexPage from "../components/IndexPage";

const Index = (props) => {
    return <IndexPage { ...props } />;
};

Index.getInitialProps = async ({ query }) => {
    const id = query.p || 1;
    let res = await fetch(`http://127.0.0.1:8000/posts`);
    let allPost = await res.json();
    let allTags = [];

    allPost.forEach(elem => {
        allTags.push(elem.tags.split(",").map(i => i.trim()));
    });
    allTags = allTags.flat();

    let maxItem = Math.ceil(allPost.length / 4);

    res = await fetch(`http://127.0.0.1:8000/posts?_page=${id}&_limit=4`);
    let posts = await res.json();

    return {
        allPost,
        posts,
        pid: id,
        maxItem,
        allTags,
        baseRoute: "/",
        ent: "/"
    };
};

export default Index;
