<template>
  <div class="portfolio">
    <navigation></navigation>
    <landing></landing>
    <about-me></about-me>
    <projects></projects>
    <posts></posts>
    <contact></contact>
    <page-end></page-end>
  </div>
</template>
<script>
  import navigation from './Navigation'
  import landing from './Landing'
  import aboutMe from './AboutMe'
  import projects from './Projects'
  import posts from './Posts'
  import contact from './Contact'
  import pageEnd from '@/app/global/components/PageEnd'

  export default {
    name: 'portfolio',
    components: {
      navigation,
      landing,
      aboutMe,
      projects,
      posts,
      contact,
      pageEnd
    }
  }
</script>
<style lang="sass">

</style>
