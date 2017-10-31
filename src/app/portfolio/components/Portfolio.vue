<template>
  <div class="portfolio">
    <navigation></navigation>
    <landing></landing>
    <about-me></about-me>
    <page-end></page-end>
  </div>
</template>
<script>
  import navigation from './Navigation'
  import landing from './Landing'
  import aboutMe from './AboutMe'
  import pageEnd from '@/app/global/components/PageEnd'

  export default {
    name: 'portfolio',
    components: {
      navigation,
      landing,
      aboutMe,
      pageEnd
    }
  }
</script>
<style lang="sass">

</style>
