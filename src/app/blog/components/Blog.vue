<template>
  <div class="blog">
    <navigation></navigation>
    <welcome></welcome>
    <articles></articles>
    <page-end></page-end>
  </div>
</template>
<script>
  import navigation from './Navigation'
  import welcome from './Welcome'
  import articles from './Articles'
  import pageEnd from '@/app/global/components/PageEnd'

  export default {
    name: 'blog',
    components: {
      navigation,
      welcome,
      articles,
      pageEnd
    }
  }
</script>
<style lang="sass">

</style>
