<template>
  <div class="portfolio">
    <navigation></navigation>
    <div class="portfolio__wrapper">
      <div class="portfolio__landing">
        <h1 class="portfolio__landing-heading">I build
          <a
            href="#"
            class="portfolio__landing-heading--highlight"
            v-scroll-to="{
              el: '#portfolio__projects',
              offset: -50,
              easing: 'ease-in-out',
              duration: 800
            }">
            cool things
          </a> on the web, and
          <a
            href="#"
            class="portfolio__landing-heading--highlight"
            v-scroll-to="{
              el: '#portfolio__posts',
              offset: -50,
              easing: 'ease-in-out',
              duration: 800
            }">
            blog
          </a> about it.
        </h1>
      </div>
    </div>
    <div class="portfolio__about">
      <div class="portfolio__about-image">
          <h2 class="portfolio__about-location">Birmingham, UK</h2>
      </div>
      <div class="portfolio__about-text">
        <p class="portfolio__about-paragraph">I'm Joshua - a designer, developer and student who makes complex tasks simple & obvious.</p>
        <p class="portfolio__about-paragraph">For the last year I have been studying for my degree in BSc Computer Science @ <a href="http://www.aston.ac.uk/" class="portfolio__about-paragraph--highlight">Aston University</a> - achieving a 2:1 in my first year.</p>
        <p class="portfolio__about-paragraph">Over the past 8 years I have been learning, building & exploring new web technologies. I am proficient in Java, PHP, JS & SQL - I like to build things with Laravel, Lumen and Vue.js!</p>
        <p class="portfolio__about-paragraph">I will be available next year for a placement, so
          <a
            href="#"
            class="portfolio__about-paragraph--highlight"
            v-scroll-to="{
              el: '#portfolio__contact',
              offset: -50,
              easing: 'ease-in-out',
              duration: 800
            }">
            hire me
          </a>… duh!
        </p>
      </div>
    </div>
    <div id="portfolio__projects" class="portfolio__projects">
      <h2 class="portfolio__projects-heading">Here are some <span class="portfolio__projects-heading--highlight">projects</span> I have launched, am currently working on, or will be starting soon(ish).</h2>
      <div class="portfolio__projects-list">
        <project-item v-for="(project, index) in projects.wip" :project="project" :key="project.id" :index="index" :length="projects.wip.length"></project-item>
      </div>
      <div class="portfolio__projects-hr">
        <span></span>
      </div>
      <div class="portfolio__projects-list portfolio__projects-list--starting-soon">
        <project-item v-for="(project, index) in projects.coming" :project="project" :key="project.id" :index="index" :length="projects.coming.length"></project-item>
      </div>
    </div>
    <div id="portfolio__posts" class="portfolio__posts">
      <h2 class="portfolio__posts-heading">Check out my <span class="portfolio__posts-heading--highlight">blog</span> where I post tech guides and the occasional 'me' post.</h2>
      <div class="portfolio__posts-list">
        <post-item v-for="(post, index) in posts" :post="post" :key="post.id" :index="index" :length="posts.length"></post-item>
      </div>
    </div>
    <div id="portfolio__contact" class="portfolio__contact">
      <h2 class="portfolio__contact-heading">Have a placement available next year? Want to work together? <a href="mailto:hello@joshuagallagher.io" class="portfolio__contact-heading--highlight">Mail me!</a></h2>
    </div>
    <page-end></page-end>
  </div>
</template>
<script>
  import navigation from './Navigation'
  import projectItem from './ProjectItem'
  import postItem from './PostItem'
  import pageEnd from '@/app/global/components/PageEnd'

  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'portfolio',
    components: {
      navigation,
      projectItem,
      postItem,
      pageEnd
    },
    mounted () {
      this.getPosts()
    },
    computed: {
      ...mapGetters({
        posts: 'portfolio/posts'
      })
    },
    methods: {
      ...mapActions({
        getPosts: 'portfolio/getPosts'
      })
    },
    data () {
      return {
        projects: {
          wip: [
            {
              'id': 1,
              'name': 'joshuagallagher.io',
              'status': 'Completed',
              'date': 'November 2017',
              'platforms': 'Website',
              'about': 'I decided that my brand needed a revamp - in the direction of securing a placement. To achieve this, I built both a portfolio and blog combined into one. The idea was to show employers relevant information on myself, but also show that I am active in learning new technologies and progressing hrough my blog.'
            },
            {
              'id': 2,
              'name': 'short.en',
              'status': 'Ongoing',
              'date': 'October 2017',
              'platforms': 'Website',
              'about': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id quam pellentesque, dapibus velit quis, dapibus nulla. Suspendisse potenti. Morbi id odio eros. Dignissim at fermentum vitae, congue in est. Morbi elit enim, imperdiet vel'
            }
          ],
          coming: [
            {
              'id': 1,
              'name': 'meeu.co',
              'status': 'Coming Soon',
              'date': 'October 2017',
              'platforms': 'Website | Android | iOS',
              'about': 'Sed dapibus sapien vel tortor euismod, a vehicula ligula congue. Nunc tortor nisi, dignissim at fermentum vitae, congue in est. Morbi elit enim, imperdiet vel. Nulla id quam pellentesque, dapibus velit quis, dapibus nulla.'
            }
          ]
        }
      }
    }
  }
</script>
<style lang="sass">
  @import '~sass/main'

  .portfolio
    &__wrapper
      display: flex
      justify-content: center
      flex-direction: column
      width: 100%
      padding: 0 50px
    &__landing
      width: 100%
      max-width: 800px
      margin: 100px auto
    &__landing-heading
      margin: 0
      line-height: 85px
      color: $text
      font-size: 60px
      font-weight: 700
      font-family: 'Merriweather', serif
    &__landing-heading--highlight
      text-decoration: none
      color: $blue
    &__about
      display: flex
      align-items: center
      flex-direction: column
      width: 100%
      padding: 0 50px
    &__about-image
      display: flex
      align-items: center
      justify-content: center
      width: 100%
      max-width: 1600px
      height: 350px
      background-image: linear-gradient(180deg, rgba($blue, .4), rgba($blue, .4)), url("../../../assets/img/mycity.png")
      background-position: 50% 36%
      background-repeat: no-repeat
      background-size: cover
      border-radius: 3px
    &__about-location
      margin: 0
      color: white
      font-size: 60px
      font-weight: 700
      font-family: 'Merriweather', serif
    &__about-text
      width: 100%
      max-width: 800px
      margin: 100px auto 0
    &__about-paragraph
      margin: 0 0 50px 0
      padding: 0
      line-height: 55px
      color: $text
      font-size: 25px
      font-weight: 300
      font-family: 'Montserrat', sans-serif
      &:last-child
        margin-bottom: 0
    &__about-paragraph--highlight
      text-decoration: underline
      color: $blue
      font-weight: 500
      transition: 250ms color ease-in-out
      &:hover
        color: $dblue
    &__projects
      display: flex
      align-items: center
      flex-direction: column
      width: 100%
      margin: 100px 0
      padding: 0 50px
    &__projects-heading
      width: 100%
      max-width: 800px
      margin: 0 0 50px
      line-height: 55px
      color: $text
      font-size: 35px
      font-weight: 700
      font-family: 'Merriweather', serif
    &__projects-heading--highlight
      color: $blue
    &__projects-list
      width: 100%
      max-width: 800px
    &__projects-list--starting-soon
      opacity: 0.6
      pointer-events: none
    &__projects-hr
      width: 100%
      max-width: 800px
      height: 1px
      margin: 75px 0
      span
        display: block
        width: 100px
        height: 1px
        background-color: $line
    &__posts
      display: flex
      align-items: center
      flex-direction: column
      width: 100%
      margin: 100px 0
      padding: 0 50px
    &__posts-heading
      width: 100%
      max-width: 800px
      margin: 0 0 50px
      line-height: 55px
      color: $text
      font-size: 35px
      font-weight: 700
      font-family: 'Merriweather', serif
    &__posts-heading--highlight
      color: $blue
    &__posts-list
      width: 100%
      max-width: 800px
    &__contact
      display: flex
      justify-content: center
      margin: 100px 0
      padding: 0 50px
    &__contact-heading
      width: 100%
      max-width: 800px
      margin: 0
      line-height: 55px
      color: $text
      font-size: 35px
      font-weight: 700
      font-family: 'Merriweather', serif
    &__contact-heading--highlight
      text-decoration: none
      color: $blue
      transition: 250ms color ease-in-out
      &:hover
        color: $dblue
</style>
