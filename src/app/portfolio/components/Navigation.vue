<template>
  <nav class="navigation">
    <div class="navigation__content">
      <div class="navigation__left">
        <logo></logo>
      </div>
      <div class="navigation__right">
        <a href="#" class="button button--blue">blog</a>
      </div>
    </div>
  </nav>
</template>
<script>
  import logo from '@/app/global/components/Logo'

  export default {
    name: 'navigation',
    components: {
      logo
    }
  }
</script>
<style lang="sass">
  @import '~sass/main'

  .navigation
    display: flex
    justify-content: center
    width: 100%
    height: 100px
    padding: 0 50px
    background: white
    &__content
      display: flex
      align-items: center
      width: 100%
      max-width: 1600px
    &__left
      display: flex
      justify-content: flex-start
      align-items: center
      width: 50%
    &__right
      display: flex
      justify-content: flex-end
      align-items: center
      width: 50%
</style>
