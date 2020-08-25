module.exports = {
    async redirects() {
        return [
            {
                source: "/p/:slug",
                destination: "/?p=:slug", // Matched parameters can be used in the destination
                permanent: true,
            },
            {
                source: "/tag/:slug",
                destination: "/tag?t=:slug", // Matched parameters can be used in the destination
                permanent: true,
            },
            {
                source: "/tag/:t/p/:p",
                destination: "/tag?t=:t&p=:p", // Matched parameters can be used in the destination
                permanent: true,
            },
            {
                source: "/post/:slug",
                destination: "/post?id=:slug", // Matched parameters can be used in the destination
                permanent: true,
            }
        ];
    },
};
