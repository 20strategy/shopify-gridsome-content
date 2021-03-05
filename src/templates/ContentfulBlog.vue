<template>
<Layout>
   
    <div class="blog-page">
      <h1 class="title is-5 has-text-centered is-family-secondary">{{$page.post.title}}</h1>
      <g-image class="bannerimage" :src="$page.post.picture1.file.url+`?h=550`"/>
      <div class="blog-text" v-html="richTextToHTML($page.post.description)"></div>
  
  </div>
 
        
  </Layout>
    
    
</template>

<page-query>
query ($id:ID!){
  post: contentfulBlog (id: $id) {
     id
     title
     picture1 {
      file{
        url
      }
    }
     description 
  }
}

</page-query>

<script>
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  methods: {
    richTextToHTML (content) {
      return documentToHtmlString(content, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return `<img src="${node.data.target.fields.file.url}?w=450" style="width:98%;max-width:600px;display:block;margin-right:auto;margin-left:auto;" alt="${node.data.target.fields.title}" />`
          }
        }
      })
    }
  }
}
</script>

<style>
.blog-page {
    max-width: 800px;
    width: 99%;
    margin-left: auto;
    margin-right: auto;}
.bannerimage{
  width:100%;
    max-height:600px;
    object-fit:cover;
}
.blog-text {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}
.blog-text h2, .blog-text h4 {
    font-size: 30px; 
      color:Blue;
      margin-bottom:10px;
}
.blog-text p {
    margin-bottom:20px;
    text-align: left;
}

.blog-text img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 20px;
}



</style>