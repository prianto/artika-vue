<template>
  <div>
    <Menu />
    <main id="panel">
      <div id="panel-content">
        <Navbar />
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <h1>{{title}}</h1>
              <div v-html="content"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  </div>
</template>

<script>
  import './About.css'
  import Data from '../Data'
  import previewJpg from '../assets/img/preview.jpg'

  import Menu from '../components/Menu'
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer'

  export default {
    name: 'About',
    components: {
      Menu,
      Navbar,
      Footer
    },
    data () {
      return {
        title: Data.dataAbout.title,
        content: Data.dataAbout.content
      }
    },
    metaInfo: {
      title: 'About Us - Artika Vue: Single-page Application (SPA) Template',
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
          content: 'https://artika-vue.herokuapp.com/about'
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
