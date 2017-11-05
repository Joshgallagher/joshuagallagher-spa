<template>
  <div class="portfolio">
    <navigation></navigation>
    <div class="portfolio__wrapper">
      <div class="portfolio__landing">
        <h1 class="portfolio__landing-heading">I build <a href="#" class="portfolio__landing-heading--highlight">cool things</a> on the web, and <a href="#" class="portfolio__landing-heading--highlight">blog</a> about it.</h1>
      </div>
    </div>
    <div class="portfolio__about">
      <div class="portfolio__about-image">
          <h2 class="portfolio__about-location">Birmingham, UK</h2>
      </div>
      <div class="portfolio__about-text">
        <p class="portfolio__about-paragraph">Hi, I’m Joshua Gallagher. I’m a web designer, developer and student.
  </p>
        <p class="portfolio__about-paragraph">I am currently studying for my degree in Computer Science at <a href="http://www.aston.ac.uk/" class="portfolio__about-paragraph--highlight">Aston University</a> and have successfully completed my first year with a 2:1 degree classification.
  </p>
        <p class="portfolio__about-paragraph">I am a self-taught designer and developer who specialises in web technologies. I am proffecient in Java, PHP, JavaScript and SQL. I also, have knowledge in various frameworks such as Laravel, Lumen, Vue.js and ReactJS.
  </p>
        <p class="portfolio__about-paragraph">I will be available next year for a placement, so <a href="#" class="portfolio__about-paragraph--highlight">hire me</a>… duh!</p>
      </div>
    </div>
    <div class="portfolio__projects">
      <h2 class="portfolio__projects-heading">Here are some <span class="portfolio__projects-heading--highlight">projects</span> I’ve launched or currently working on.</h2>
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
    <div class="portfolio__posts">
      <h2 class="portfolio__posts-heading">Check out my <span class="portfolio__posts-heading--highlight">blog</span> where I post <span class="portfolio__posts-heading--highlight">coding tutorials</span> and talk about <span class="portfolio__posts-heading--highlight">comp sci</span>.</h2>
      <div class="portfolio__posts-list">
        <post-item v-for="(post, index) in posts.posts" :post="post" :key="post.id" :index="index" :length="posts.posts.length"></post-item>
      </div>
    </div>
    <div class="portfolio__contact">
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

  export default {
    name: 'portfolio',
    components: {
      navigation,
      projectItem,
      postItem,
      pageEnd
    },
    data () {
      return {
        projects: {
          wip: [
            {
              'id': 1,
              'name': 'yournot.es',
              'status': 'Ongoing',
              'date': 'October 2017',
              'platforms': 'Website',
              'about': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id quam pellentesque, dapibus velit quis, dapibus nulla. Maecenas accumsan in dolor id auctor. Suspendisse potenti. Morbi id odio eros.'
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
        },
        posts: {
          posts: [
            {
              'id': 1,
              'title': 'Lumen with Laravel JWT',
              'date': '29/08/17',
              'author': 'Joshua Gallagher',
              'teaser': 'Sed venenatis, justo quis ornare egestas, velit augue lacinia orci, in vehicula risus ipsum vitae mi. Maecenas magna elit, mattis quis urna vitae, tempor tincidunt velit. Nam ornare nisl arcu. Mauris blandit in ante sit amet hendrerit.'
            },
            {
              'id': 2,
              'title': 'Lumen: Password Resets',
              'date': '29/08/17',
              'author': 'Joshua Gallagher',
              'teaser': 'Nulla dictum maximus tortor ac tempor. In hac habitasse platea dictumst. Cras tempus congue dui. Suspendisse ac eros vitae turpis posuere rutrum. Etiam vel erat ante. Etiam in tellus nunc. Ut ut neque est. Etiam ullamcorper justo ut tellus fermentum, eget suscipit lectus viverra.'
            },
            {
              'id': 3,
              'title': 'Hello, World!',
              'date': '29/08/17',
              'author': 'Joshua Gallagher',
              'teaser': 'Ut vehicula, est ac venenatis aliquet, dui mauris euismod quam, in sollicitudin nunc nibh at eros. Phasellus tempor orci nec ligula fringilla consequat.'
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
