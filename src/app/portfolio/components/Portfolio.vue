<template>
  <div class="portfolio">
    <navigation></navigation>
    <page-end></page-end>
  </div>
</template>
<script>
  import navigation from './Navigation'
  import pageEnd from '@/app/global/components/PageEnd'

  export default {
    name: 'portfolio',
    components: {
      navigation,
      pageEnd
    }
  }
</script>
<style lang="sass">

</style>
