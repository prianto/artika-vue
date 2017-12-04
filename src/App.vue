<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './App.css'

export default {
  name: 'app',
  metaInfo: {
    meta: [
      {
        name: 'MobileOptimized',
        content: '320'
      },
      {
        name: 'HandheldFriendly',
        content: 'true'
      },
      {
        property: 'og:site_name',
        content: 'Prianto'
      },
      {
        property: 'twitter:site',
        content: '@prianto'
      }
    ],
    link: [
      {
        rel: 'favicon',
        href: '/favicon.ico'
      },
      {
        rel: 'shortcut icon',
        href: '/favicon.ico'
      }
    ]
  }
}
</script>

<style>
</style>
