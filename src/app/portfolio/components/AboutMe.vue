<template>
  <div class="about">
    <div class="about__image">
      <h1 class="about__location">Birmingham, UK</h1>
    </div>
    <div class="about__text">
      <p class="about__paragraph">Hi, I’m Joshua Gallagher. I’m a web designer, developer and student.</p>
      <p class="about__paragraph">I am currently studying for my degree in Computer Science at <a href="#" class="about__paragraph--link">Aston University</a> and have successfully completed my first year with a 2:1 degree classification.</p>
      <p class="about__paragraph">I am a self-taught designer and developer and specialise in web technologies. I am proffecient in Java, PHP, JavaScript and SQL. Also, have knowledge in various frameworks such as Laravel, Lumen, Vue.js and ReactJS.</p>
      <p class="about__paragraph">I will be available next year for a placement, so <a href="#" class="about__paragraph--link">hire me</a>… duh!</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'about-me'
  }
</script>
<style lang="sass">
  @import '~sass/main'

  .about
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    width: 100%
    padding: 0 50px
    background: white
    &__image
      display: flex
      align-items: center
      justify-content: center
      width: 100%
      max-width: 1600px
      height: 350px
      background-image: linear-gradient(180deg, rgba($blue, .75), rgba($blue, .75)), url("../../../assets/img/mycity.png")
      background-position: 50% 36%
      border-radius: 6px
    &__location
      margin: 0
      color: white
      font-size: 50px
      font-weight: bold
    &__text
      width: 75%
      margin-top: 100px
      color: $text
      font-size: 28px
    &__paragraph
      margin: 0 0 50px 0
      line-height: 2
      &:last-child
        margin-bottom: 0
    &__paragraph--link
      color: $blue
      text-decoration: none
</style>
