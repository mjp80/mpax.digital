module.exports = {
    siteName: 'Martin Paton\'s minimum viable website.',
    siteUrl: '//mpax.digital',
    plugins: [
        {
          use: '@gridsome/source-contentful',
          options: {
            space: process.env.CONTENTFUL_SPACE,
            accessToken: process.env.CONTENTFUL_ENVIRONMENT_TOKEN,
            host: 'cdn.contentful.com',
            environment: 'master',
            typeName: 'Contentful'
          }
        }
      ]
    }