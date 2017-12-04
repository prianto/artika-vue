<template>
  <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
    <div class="container-fluid">
      <router-link :to="'/'" class="navbar-brand">
        <img :src="logoPng" alt="" />
      </router-link>
      <button class="navbar-toggler navbar-toggler-left toggle-button" type="button" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <MenuItem v-for="item in menus" key="item.id" :dataHref="item.href" :dataIcon="item.icon" :dataLabel="item.label" />
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/prianto/artika-vue" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-cloud-download" aria-hidden="true"></i>&nbsp; Download
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import './Navbar.css'
  import Data from '../Data'
  import logoPng from '../assets/img/logo.png'

  import MenuItem from './MenuItem'

  export default {
    name: 'Navbar',
    components: {
      MenuItem
    },
    data () {
      return {
        menus: Data.dataMenu,
        logoPng: logoPng
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
