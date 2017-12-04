<template>
  <nav id="menu">
    <ul class="navbar-nav ml-auto">
      <MenuItem v-for="item in menus" key="item.id" :dataHref="item.href" :dataIcon="item.icon" :dataLabel="item.label" />
      <li class="nav-item">
        <a class="nav-link" href="https://github.com/prianto/artika-vue" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-cloud-download" aria-hidden="true"></i>&nbsp; Download
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import './Menu.css'
  import Data from '../Data'
  import MenuItem from './MenuItem'

  import Slideout from 'slideout'

  export default {
    name: 'Menu',
    components: {
      MenuItem
    },
    mounted: function () {
      const slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
      })
      document.querySelector('.toggle-button').addEventListener('click', function () {
        slideout.toggle()
      })
    },
    data () {
      return {
        menus: Data.dataMenu
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
