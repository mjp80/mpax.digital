module.exports = {
    siteName: 'Martin Paton\'s minimum viable website.',
    siteUrl: '//mpax.digital',
    plugins: [
        {
          use: '@gridsome/source-contentful',
          options: {
            space: 'yznoev0lo7ue', // Swap to ENV
            accessToken: 'R1g1fWoR0by76RGXSDmc1FCeot2vecPONpGua2ZVArM', // Swap to ENV
            host: 'cdn.contentful.com',
            environment: 'master',
            typeName: 'Contentful'
          }
        }
      ]
    }