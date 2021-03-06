module.exports = {
  siteName: 'Dogtic.com',
  siteDescription: 'A full-featured Shopify starter kit for Gridsome, including an login page',
  siteUrl: 'https://gridsome-starter-shopify-account.vercel.app',
  templates: {
    ShopifyProduct: [
      {
        path: '/product/:handle',
        component: './src/templates/Product.vue'
      }
    ],
    ShopifyCollection: [
      {
        path: '/collection/:handle',
        component: './src/templates/Collection.vue'
      }
    ],
    ShopifyPage: [
      {
        path: '/:handle',
        component: './src/templates/Page.vue'
      }
    ],
    ContentfulBlog: [
      {path: '/blog/:slug',
      component: './src/templates/ContentfulBlog.vue'
  }
  ],
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },{
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
        host: "cdn.contentful.com",
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        typename: "Contentful"
      },
    },{
      use: 'gridsome-source-shopify',
      options: {
        storeName: process.env.GRIDSOME_SHOPIFY_STOREFRONT,
        storefrontToken: process.env.GRIDSOME_SHOPIFY_STOREFRONT_TOKEN
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        flexsearch: {
          profile: 'match'
        },
        collections: [
          {
            typeName: 'ShopifyProduct',
            indexName: 'Product',
            fields: ['title', 'handle', 'description']
          },
          {
            typeName: 'ShopifyCollection',
            indexName: 'Collection',
            fields: ['title', 'handle', 'description']
          }
        ],
        searchFields: ['title', 'handle', 'tags']
      }
    },
 
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/', '/collections', '/collection/*'],
        width: 1300,
        height: 900
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/account'],
        config: {
          '/product/*': {
            changefreq: 'daily',
            priority: 0.5
          },
          '/collection/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/collections': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GRIDSOME_ANALYTICS_ID
      }
    },


  ]
}
