<template>
  <div>
    <Menu />
    <main id="panel">
      <div id="panel-content">
        <Navbar />
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-8 col-md-10 mx-auto">
              <h1 class="mb-4">Search</h1>
              <form name="sentKeyword">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Please type keywords..." />
                  <span class="input-group-btn">
                    <button class="btn btn-secondary" type="button">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </span>
                </div>
              </form>
              <div v-for="(item, index) in articles" :key="item.id" class="post-preview">
                <h4>
                  <router-link :to="'/post'">{{item.title}}</router-link>
                </h4>
                <small class="post-meta">
                  <router-link :to="'/post'">{{item.author}}</router-link>,&nbsp;
                  <router-link :to="'/category'">{{item.category}}</router-link>,&nbsp;
                  <router-link :to="'/post'">{{item.published}}</router-link>
                </small>
                <p>
                  {{item.excerpt}}
                </p>
                <hr v-if="index < (articles.length - 1)"/>
              </div>
            </div>
          </div>
          <Pagination dataHref="result" />
        </div>
        <Footer />
      </div>
    </main>
  </div>
</template>

<script>
  import './Result.css'
  import Data from '../Data'
  import previewJpg from '../assets/img/preview.jpg'

  import Menu from '../components/Menu'
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer'
  import Pagination from '../components/Pagination'

  export default {
    name: 'Result',
    components: {
      Menu,
      Navbar,
      Footer,
      Pagination
    },
    data () {
      return {
        articles: Data.dataArticles
      }
    },
    metaInfo: {
      title: 'Search - Artika Vue: Single-page Application (SPA) Template',
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
          content: 'Search - Artika Vue: Single-page Application (SPA) Template'
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
          content: 'https://artika-vue.herokuapp.com/result'
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
