<template>
  <div class="siema-container">
    <div v-for="item in slides" :key="item.id" class="siema-slide">
      <img :src="item.image" alt="" />
      <div class="siema-caption">
        <h4>
          <router-link :to="'/post'">
            {{item.title}}
          </router-link>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
  import './Siema.css'

  import Data from '../Data'

  import Siema from 'siema'

  export default {
    name: 'Slider',
    mounted: function () {
      new Siema({ // eslint-disable-line no-new
        selector: '.siema-container',
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: false
      })
    },
    data () {
      return {
        slides: Data.dataSlides
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
