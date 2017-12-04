<template>
  <div>
    <Menu />
    <main id="panel">
      <div id="panel-content">
        <Navbar />
        <article>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <h1>{{article.title}}</h1>
                <small class="post-meta">
                  <router-link :to="'/post'">{{article.title}}</router-link>,&nbsp;
                  <router-link :to="'/category'">{{article.category}}</router-link>,&nbsp;
                  <router-link :to="'/post'">{{article.published}}</router-link>
                </small>
                <p class="subtitle">{{article.excerpt}}</p>
                <div v-html="article.content"></div>
              </div>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </main>
  </div>
</template>

<script>
  import './Post.css'
  import Data from '../Data'
  import previewJpg from '../assets/img/preview.jpg'

  import Menu from '../components/Menu'
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer'

  export default {
    name: 'Post',
    components: {
      Menu,
      Navbar,
      Footer
    },
    data () {
      return {
        article: Data.dataArticle
      }
    },
    metaInfo: {
      title: 'Post - Artika Vue: Single-page Application (SPA) Template',
      meta: [
        {
          name: 'description',
          content: 'Clean and responsive template built with Vue and Bootstrap. This theme features home page, category page, about page, contact page, search page, and post page.'
        },
        {
          name: 'author',
          content: '@prianto'
        },
        {
          property: 'og:title',
          content: 'Post - Artika Vue: Single-page Application (SPA) Template'
        },
        {
          property: 'og:description',
          content: 'Clean and responsive template built with Vue and Bootstrap. This theme features home page, category page, about page, contact page, search page, and post page.'
        },
        {
          property: 'og:image',
          content: previewJpg
        },
        {
          property: 'og:url',
          content: 'https://artika-vue.herokuapp.com/post'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:image:alt',
          content: 'Artika Vue'
        }
      ]
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
