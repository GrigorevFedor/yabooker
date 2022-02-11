module.exports = {
    siteUrl: 'https://yabooker.com',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'], // <= exclude here
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://yabooker.com/server-sitemap.xml', // <==== Add here
        ],
    },
}