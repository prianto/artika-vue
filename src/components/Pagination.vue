<template>
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <router-link :to="dataHref" class="page-link">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Prev</span>
      </router-link>
    </li>
    <li class="page-item">
      <router-link :to="dataHref" class="page-link">1</router-link>
    </li>
    <li class="page-item active">
      <router-link :to="dataHref" class="page-link">2</router-link>
    </li>
    <li class="page-item">
      <router-link :to="dataHref" class="page-link">3</router-link>
    </li>
    <li class="page-item">
      <router-link :to="dataHref" class="page-link">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
  import './Pagination.css'

  export default {
    name: 'pagination',
    props: [
      'dataHref'
    ],
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
