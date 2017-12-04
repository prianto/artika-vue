<template>
  <li class="nav-item">
    <router-link :to="dataHref" class="nav-link">
      <i :class="awesome(dataIcon)" aria-hidden="true"></i>&nbsp; {{dataLabel}}
    </router-link>
  </li>
</template>

<script>
  import './MenuItem.css'

  export default {
    name: 'MenuItem',
    props: [
      'dataHref',
      'dataIcon',
      'dataLabel'
    ],
    data () {
      return {}
    },
    methods: {
      awesome: function (icon) {
        return 'fa ' + icon + ' fa-fw'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
