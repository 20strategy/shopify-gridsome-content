<template>
  <Layout>
    <div class="container is-max-widescreen">    
        <div class="columns">
          <div class="column is-two-fifths header">
            <div class="header-content">
              <h1 class="title is-size-2 is-family-secondary">
                Walk and Play ♬
              </h1>
              <div class="content"> 
                <p>You love your puppy and you love your walk. Walking will bring your dog and you closer everyday. Let's make walking more pleasant.</p>
              </div>
              <g-link
                :to="collection.path"
                class="button is-primary is-outlined">
                Shop Now
              </g-link>
            </div>
          </div>
          <div class="column is-three-fifth">
            <figure class="image">
              <g-image
                src="../assets/homepage-image.webp"
          
                alt="A model is holding a puppy" />
            </figure>
          </div>
        
      </div>
    </div>
    <br>
    <br>
    <div class="container is-max-widescreen has-text-centered">
      <hr>
      <h3 class="title is-size-4 is-family-secondary">
        Featured Products
      </h3>
      <hr>
      <br>
      <div class="columns is-multiline">
        <div
          v-for="({ node: product }) in featuredProducts"
          :key="product.id"
          class="column is-4 imagehovering">
          <div class="card ">
            <div class="card-image ">
              <figure class="image is-4by5">
                <g-link :to="product.path"><v-lazy-image
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
              <div class="field is-centered">
                <div class="">
                  <g-link
                    :to="product.path"
                    class="button is-primary is-outlined ">
                    View Product
                  </g-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
     <Subscribe/>
    </div>
    
  </Layout>
</template> 

<script>


import Subscribe from "@/components/Subscribe"
export default {
  components:{
    Subscribe,
  },
  metaInfo: {
    title: 'Dogtic.com'
  },
  computed: {
    collection () { return this.$page.allShopifyCollection.edges.length && this.$page.allShopifyCollection.edges[ 0 ].node },
    featuredProducts () { return this.$page.allShopifyProduct.edges }
  }
}
</script>

<page-query>
query ShopifyProducts {
  allShopifyCollection (limit: 1) {
    edges {
      node {
        id
        path
        title
        descriptionHtml
        image {
          altText
          src: transformedSrc(maxWidth: 800, maxHeight: 800, crop: CENTER)
          placeholder: transformedSrc(maxWidth: 200, maxHeight: 200, crop: CENTER)
        }
      }
    }
  }
  allShopifyProduct (limit: 6) {
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

<style  lang="scss"scoped>
.header {
  align-items: center;
  display: flex;}
.header-content {
    text-align: center;
  }
.imagehovering:hover {
  transform: scale(1.01);
  

}

</style>
