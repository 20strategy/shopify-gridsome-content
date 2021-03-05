<template>
  <Layout>
    <div class="container has-text-centered">
    <div class="columns is-multiline">
        <div
          v-for="({ node: product }) in featuredProducts"
          :key="product.id"
          class="column is-4">
          <div class="card">
            <div class="card-image imagehovering">
              <figure class="image is-4by5">
               <g-link :to="product.path"> <v-lazy-image
                  :src="product.images[0].src"
                  :src-placeholder="product.images[0].placeholder"
                  :alt="product.images[0].altText || product.title" /></g-link>
              </figure>
            </div>
            <div class="card-content is-centered">
              <div class="media">
                <div class="media-content">
                  <p class="title is-6 is-family-secondary is-uppercase">
                    {{ product.title }}
                  </p>
                  <p class="subtitle is-6">
                    {{ product.priceRange.minVariantPrice.amount }}
                  </p>
                </div>
              </div>

            <!--  <div
                class="content"
                v-html="product.descriptionHtml" />  -->
              <div class="field is-centered ">
                <div class="">
                  <g-link
                    :to="product.path"
                    class="button is-primary is-outlined"
                  >
                    View Product
                  </g-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Come, shop!'
  },
  computed: {
    collection () { return this.$page.allShopifyCollection.edges.length && this.$page.allShopifyCollection.edges[ 0 ].node },
    featuredProducts () { return this.$page.allShopifyProduct.edges }
  }
}
</script>
<page-query>
query ShopifyProducts {
  
  allShopifyProduct (limit: 10) {
    edges {
      node {
        id
        title
        path
        descriptionHtml
        priceRange {
          minVariantPrice {
            amount(format: true)
          }
        }
        images (limit: 1) {
          id
          altText
          src: transformedSrc (maxWidth: 400, maxHeight: 500, crop: CENTER)
          placeholder: transformedSrc(maxWidth: 100, maxHeight: 125, crop: CENTER)
        }
      }
    }
  }
}
</page-query>

<style scoped>
.imagehovering:hover {
  transform: scale(1.01);

}
</style>