require('ts-node').register({ files: true });

module.exports = {
    siteMetadata: {
        title: `Roman Bytes developer`,
        description: `Roman Bytes is a developer website to host all sorts of projects I am working on. My name is Jacob Roman and I am a full stack developer with a passion for the front-end and UI Design.`,
        author: `Jacob Roman`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/roman-bytes-logo.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-typescript`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-source-github-api`,
            options: {
                token: '3387d2747808a0a1ff5c838196e63040537a1b0b',
                graphQLQuery: `
                   query ($author: String = "", $userFirst: Int = 0) {
                      user(login: $author) {
                        repositories(orderBy: {field: NAME, direction: DESC}, first: $userFirst) {
                          edges {
                            node {
                              name
                              isPrivate
                              url
                              id
                              repositoryTopics(first: 10) {
                                edges {
                                  node {
                                    topic {
                                      name
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }`,
                variables: {
                    author: 'roman-bytes',
                    userFirst: 77,
                },
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
