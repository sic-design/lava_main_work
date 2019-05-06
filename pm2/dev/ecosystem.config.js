module.exports = {
    apps: [{
        name: "ssr.dev",
        script: "./ssr.js",
        instances: 1,
        env: {
            NODE_ENV: "development",
            SSR_PORT: 3001
        }
    }]
}
