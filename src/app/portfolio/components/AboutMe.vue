<template>
  <div class="about">
    <div class="about__image">
        <h2 class="about__location-text">Birmingham, UK</h2>
    </div>
    <div class="about__text">
      <p class="about__paragraph">Hi, I’m Joshua Gallagher. I’m a web designer, developer and student.
</p>
      <p class="about__paragraph">I am currently studying for my degree in Computer Science at <a href="http://www.aston.ac.uk/" class="about__paragraph--highlight">Aston University</a> and have successfully completed my first year with a 2:1 degree classification.
</p>
      <p class="about__paragraph">I am a self-taught designer and developer who specialises in web technologies. I am proffecient in Java, PHP, JavaScript and SQL. I also, have knowledge in various frameworks such as Laravel, Lumen, Vue.js and ReactJS.
</p>
      <p class="about__paragraph">I will be available next year for a placement, so <a href="#" class="about__paragraph--highlight">hire me</a>… duh!</p>
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
    align-items: center
    flex-direction: column
    width: 100%
    padding: 0 50px
    &__image
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
    &__location-text
      margin: 0
      color: white
      font-size: 60px
      font-weight: 700
      font-family: 'Merriweather', serif
    &__text
      width: 100%
      max-width: 800px
      margin: 100px auto 0
    &__paragraph
      margin: 0 0 50px 0
      padding: 0
      line-height: 55px
      color: $text
      font-size: 25px
      font-weight: 300
      font-family: 'Montserrat', sans-serif
      &:last-child
        margin-bottom: 0
    &__paragraph--highlight
      text-decoration: underline
      color: $blue
      font-weight: 500
      transition: 250ms color ease-in-out
      &:hover
        color: $dblue
</style>
