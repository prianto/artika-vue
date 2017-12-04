<template>
  <div class="col-12 col-sm-6 portfolio-item">
    <div class="card h-100">
      <router-link :to="'/post'">
        <img class="card-img-top lazy" :src="dummyPng" :data-src="dataImage" alt="" />
      </router-link>
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="'/post'">{{dataTitle}}</router-link>
        </h4>
        <small class="post-meta">
          <router-link :to="'/post'">{{dataAuthor}}</router-link>,&nbsp;
          <router-link :to="'/category'">{{dataCategory}}</router-link>,&nbsp;
          <router-link :to="'/post'">{{dataPublished}}</router-link>
        </small>
        <p class="card-text">{{dataExcerpt}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import './Portfolio.css'
  import dummyPng from '../assets/img/dummy.png'

  export default {
    name: 'Portfolio',
    props: [
      'dataImage',
      'dataTitle',
      'dataAuthor',
      'dataCategory',
      'dataPublished',
      'dataExcerpt'
    ],
    mounted: function () {
      /*
      Lazy images
      */
      const lazy = document.getElementsByClassName('lazy')
      if (lazy.length) {
        for (let i = 0; i < lazy.length; i++) {
          let lazyDataSrc = lazy[i].getAttribute('data-src')
          if (lazyDataSrc) {
            lazy[i].setAttribute('src', lazyDataSrc)
          }
        }
      }
    },
    data () {
      return {
        dummyPng: dummyPng
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
