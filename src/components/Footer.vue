<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <p class="copyright text-muted">
            Copyright &copy; {{thisYear}}
          </p>
          <ul class="list-inline text-center">

            <li v-for="item in icons" :key="item.id" class="list-inline-item">
              <a target="_blank" :href="item.href" rel="noopener noreferrer">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i :class="footerIcon(item.icon)"></i>
                </span>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import './Footer.css'

  export default {
    name: 'Footer',
    data () {
      return {
        thisYear: new Date().getFullYear(),
        icons: [
          {
            id: 0,
            icon: 'fa-twitter',
            href: 'https://twitter.com'
          },
          {
            id: 1,
            icon: 'fa-github',
            href: 'https://github.com'
          }
        ]
      }
    },
    methods: {
      footerIcon: function (i) {
        return 'fa ' + i + ' fa-stack-1x fa-inverse'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
