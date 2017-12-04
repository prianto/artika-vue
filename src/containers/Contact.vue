<template>
  <div>
    <Menu />
    <main id="panel">
      <div id="panel-content">
        <Navbar />
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <h1 class="mb-1">Contact Us</h1>
              <p class="mb-1">Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible.</p>
              <form name="sentMessage" id="contactForm">
                <div class="control-group">
                  <div class="form-group floating-label-form-group controls">
                    <label>Your Name</label>
                    <input type="text" class="form-control" placeholder="Your Name" id="name" required />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="control-group">
                  <div class="form-group floating-label-form-group controls">
                    <label>Email Address</label>
                    <input type="email" class="form-control" placeholder="Email Address" id="email" required />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="control-group">
                  <div class="form-group col-xs-12 floating-label-form-group controls">
                    <label>Phone Number</label>
                    <input type="tel" class="form-control" placeholder="Phone Number" id="phone" required />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="control-group">
                  <div class="form-group floating-label-form-group controls">
                    <label>Message</label>
                    <textarea rows="5" class="form-control" placeholder="Message" id="message" required></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <br />
                <div id="success"></div>
                <div class="form-group">
                  <button type="submit" class="btn btn-secondary" id="sendMessageButton">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  </div>
</template>

<script>
  import './Contact.css'
  import previewJpg from '../assets/img/preview.jpg'

  import Menu from '../components/Menu'
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer'

  export default {
    name: 'Contact',
    components: {
      Menu,
      Navbar,
      Footer
    },
    data () {
      return {}
    },
    metaInfo: {
      title: 'Contact Us - Artika Vue: Single-page Application (SPA) Template',
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
          content: 'Contact - Artika Vue: Single-page Application (SPA) Template'
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
          content: 'https://artika-vue.herokuapp.com/contact'
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
