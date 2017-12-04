<template>
  <div>
    <Menu />
    <main id="panel">
      <div id="panel-content">
        <Navbar />
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
          <Pagination dataHref="category" />
        </div>
        <Footer />
      </div>
    </main>
  </div>
</template>

<script>
  import './Category.css'
  import Data from '../Data'
  import previewJpg from '../assets/img/preview.jpg'

  import Menu from '../components/Menu'
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer'
  import Portfolio from '../components/Portfolio'
  import Pagination from '../components/Pagination'

  export default {
    name: 'Category',
    components: {
      Menu,
      Navbar,
      Footer,
      Portfolio,
      Pagination
    },
    data () {
      return {
        articles: Data.dataArticles
      }
    },
    metaInfo: {
      title: 'Category - Artika Vue: Single-page Application (SPA) Template',
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
          content: 'About Us - Artika Vue: Single-page Application (SPA) Template'
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
          content: 'https://artika-vue.herokuapp.com/category'
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
