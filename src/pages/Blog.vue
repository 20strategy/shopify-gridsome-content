
<template>
<Layout>
 <div class="grid">
      <div class ="projects">
        <div class="project" v-for="edge in $page.blogs.edges" :key="edge.node.id">
            <g-link :to="edge.node.path" class="project-link">
            <g-image :src="edge.node.picture1.file.url+`?h=500`"
                :alt="edge.node.picture1.title"
                class="blog-thumbnail"/>
           
              <h2 class="blog-title">{{ edge.node.title }}</h2>
                <p class="blog-excerpt">{{edge.node.excerpt}}</p>
           
            </g-link>
        </div>
        </div>
        </div>
    </Layout>
    
</template>

<script>
export default {
    props: {
        blogs: {
            type: Array,
            required: true
        }
    }
}
</script>



<page-query>
{
  blogs: allContentfulBlog{
    edges{
      node{
        id
        title
        excerpt
        slug
        author
        path
        picture1 {
          id
          title
          file{
            url
          }
          
        }
        description  
      }
    }
  }
}
</page-query>

<style scoped>
.grid {
    max-width: 1050px;
    margin: 0 auto;
    padding: 0 3px ;}
.projects {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 5px;
}
.project {
  grid-column: auto / span 2;
  text-align: center;
}
.project-link {
  text-decoration: none;}
.blog-thumbnail {
  width: 95%;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0,0,0,0.25);
}
.blog-title {
  font-size: 1.2rem;
  color: #333;
  margin: 0.5rem 0 0 0;
  max-width: 600px;
  width: 85%;
  margin-left:auto;
  margin-right:auto;
}
.blog-excerpt {
  font-size: 0.88rem;
  color: #999;
  margin: 0.5rem 0 0 0;
  max-width: 600px;
  width: 85%;
  margin-left:auto;
  margin-right:auto;
}


.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.25);
}

@media (min-width: 520px) {
  .project {grid-column: auto / span 1;}
  .project:nth-child(3n+1) {grid-column: auto / span 1;}
}

</style>