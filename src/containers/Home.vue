<template>
  <div>
    <Menu />
    <main id="panel">
      <div id="panel-content">
        <Navbar />
        <div class="container">
          <div class="row">
            <div class="col-12">
              <Slider />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <Portfolio v-for="item in articles" :key="item.id"
              :dataImage="item.image"
              :dataTitle="item.title"
              :dataAuthor="item.author"
              :dataCategory="item.category"
              :dataPublished="item.published"
              :dataExcerpt="item.excerpt"
            />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  </div>
</template>

<script>
  import './Home.css'
  import Data from '../Data'
  import previewJpg from '../assets/img/preview.jpg'

  import Menu from '../components/Menu'
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer'
  import Slider from '../components/Siema'
  import Portfolio from '../components/Portfolio'

  export default {
    name: 'Home',
    components: {
      Menu,
      Navbar,
      Footer,
      Portfolio,
      Slider
    },
    data () {
      return {
        articles: Data.dataArticles
      }
    },
    metaInfo: {
      title: 'Welcome - Artika Vue: Single-page Application (SPA) Template',
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
          content: 'Welcome - Artika Vue: Single-page Application (SPA) Template'
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
          content: 'https://artika-vue.herokuapp.com/'
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
