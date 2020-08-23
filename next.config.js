module.exports = {
    async redirects() {
        return [
            {
                source: "/p/:slug",
                destination: "/?id=:slug", // Matched parameters can be used in the destination
                permanent: true,
            },
        ];
    },
};
