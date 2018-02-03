<template>
  <div class="portfolio">
    <navigation></navigation>
      <div class="portfolio__landing">
        <h1 class="portfolio__landing-heading">I build
          <a
            href="#"
            class="portfolio__landing-heading--highlight"
            v-scroll-to="{
              el: '#portfolio__projects',
              offset: 0,
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
              offset: 0,
              easing: 'ease-in-out',
              duration: 800
            }">
            blog
          </a> about it.
        </h1>
      </div>
    <div class="portfolio__about">
      <div class="portfolio__about-image">
          <h2 class="portfolio__about-location">Birmingham, UK</h2>
      </div>
      <div class="portfolio__about-text">
        <p class="portfolio__about-paragraph">I'm Joshua - a designer, developer and student who makes complex tasks simple & obvious.</p>
        <p class="portfolio__about-paragraph">Over the last year I have been studying for my degree in BSc Computer Science @ <a href="http://www.aston.ac.uk/" class="portfolio__about-paragraph--highlight">Aston University</a> - achieving a 2:1 in my first year.</p>
        <p class="portfolio__about-paragraph">For the past 8 years I have been learning, building & exploring new web technologies. I am proficient in Java, PHP, JS & SQL - I like to build things with Laravel, Lumen and Vue.js!</p>
        <p class="portfolio__about-paragraph">I am available for a permanent full time position or a 1 year placement in 2018/19. If you're interested, send me an <a href="mailto:hello@joshuagallagher.io" class="portfolio__about-paragraph--highlight">email</a> & I'll get my CV over to you!</p>
      </div>
    </div>
    <div id="portfolio__projects" class="portfolio__projects">
      <h2 class="portfolio__projects-heading">Here are some <span class="portfolio__projects-heading--highlight portfolio__projects-heading--italic">projects</span> I have launched, am currently working on, or will be starting soon(ish).</h2>
      <div class="portfolio__projects-list">
        <project-item v-for="(project, index) in projects.wip" :project="project" :key="project.id" :index="index" :length="projects.wip.length"></project-item>
      </div>
      <div class="portfolio__projects-hr" v-if="projects.coming.length > 0">
        <span></span>
      </div>
      <div class="portfolio__projects-list portfolio__projects-list--starting-soon" v-if="projects.coming.length > 0">
        <project-item v-for="(project, index) in projects.coming" :project="project" :key="project.id" :index="index" :length="projects.coming.length"></project-item>
      </div>
    </div>
    <div id="portfolio__posts" class="portfolio__posts">
      <h2 class="portfolio__posts-heading">Check out my <span class="portfolio__posts-heading--highlight portfolio__posts-heading--italic">blog</span> where I post tech guides and the occasional rant.</h2>
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
  import navigation from '@/app/global/components/Navigation'
  import projectItem from './ProjectItem'
  import postItem from './PostItem'
  import pageEnd from '@/app/global/components/PageEnd'

  import { mapActions, mapGetters } from 'vuex'

  import projectsData from '../data/projects.js'

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
        ...projectsData
      }
    }
  }
</script>
<style lang="sass">
  @import '~sass/base/vars'

  .portfolio
    background-color: white
    &__landing
      display: flex
      justify-content: center
      align-items: center
      width: 100%
      padding: 100px 50px
    &__landing-heading
      max-width: 800px
      width: 100%
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
      padding: 100px 0 0
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
      padding: 100px 50px 0
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
    &__projects-heading--italic
      font-style: italic
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
      padding: 100px 50px 0
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
    &__posts-heading--highlight
      font-style: italic
    &__posts-list
      width: 100%
      max-width: 800px
    &__contact
      display: flex
      justify-content: center
      padding: 100px 50px
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

    @media screen and (max-width: 1024px)
      &__landing
        padding: 50px 50px
      &__landing-heading
        line-height: 70px
        font-size: 50px
      &__about-location
        line-height: 70px
        font-size: 50px
      &__about-text
        padding-top: 50px
      &__about-paragraph
        font-size: 22px
        line-height: 45px
      &__projects
        padding: 50px 35px
      &__projects-heading
        font-size: 30px
        line-height: 45px
      &__posts
        padding: 0 35px
      &__posts-heading
        font-size: 30px
        line-height: 45px
      &__contact
        padding: 50px 35px
      &__contact-heading
        font-size: 30px
        line-height: 45px
    @media screen and (max-width: 768px)
      &__landing
        padding: 50px 35px
      &__landing-heading
        font-size: 40px
        line-height: 55px
      &__about
        padding: 0 35px
      &__about-image
        height: 250px
      &__about-location
        line-height: 45px
        font-size: 35px
      &__about-paragraph
        font-size: 20px
        line-height: 38px
      &__projects
        padding: 35px 35px
      &__about-paragraph
        margin: 0 0 25px 0
      &__projects-hr
        margin: 50px 0
    @media screen and (max-width: 490px)
      &__landing-heading
        font-size: 30px
        line-height: 45px
    @media screen and (max-width: 425px)
      &__landing
        padding: 35px 20px
      &__about
        padding: 0 20px
      &__about-image
        height: 150px
      &__about-location
        line-height: 35px
        font-size: 25px
      &__about-text
        padding-top: 35px
      &__about-paragraph
        font-size: 20px
        line-height: 38px
      &__projects
        padding: 35px 20px
      &__projects-heading
        font-size: 28px
      &__posts
        padding: 0 20px
      &__contact
        padding: 35px 20px
</style>
