<template>
  <Layout>
    <div class="container has-text-centered">
      <h1 class="title is-family-secondary">
        {{ collection.title }}
      </h1>
      <hr>
      <br>
      <div class="columns is-multiline">
        <div
          v-for="product in collection.products"
          :key="product.id"
          class="column is-4">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by5">
                <v-lazy-image
                  :src="product.images[0].src"
                  :src-placeholder="product.images[0].placeholder"
                  :alt="product.images[0].altText || product.title" />
              </figure>
            </div>
            <div class="card-content has-text-left">
              <div class="media">
                <div class="media-content">
                  <p class="title is-5 is-family-secondary is-uppercase">
                    {{ product.title }}
                  </p>
                  <p class="subtitle is-6">
                    {{ product.priceRange.minVariantPrice.amount }}
                  </p>
                </div>
              </div>

              <div class="field is-grouped is-grouped-right">
                <div class="control">
                  <g-link
                    :to="product.path"
                    class="button is-primary is-outlined">
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
  computed: {
    collection () { return this.$page.shopifyCollection }
  }
}
</script>

<page-query>
query Collection ($id: ID!) {
  shopifyCollection (id: $id) {
    id
    title
    descriptionHtml
    products {
      id
      title
      path
      descriptionHtml
      priceRange {
        minVariantPrice {
          amount(format: true, currency: "USD")
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
</page-query>
