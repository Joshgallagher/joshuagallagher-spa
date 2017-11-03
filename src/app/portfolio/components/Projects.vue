<template>
  <div class="projects">
    <h2 class="projects__heading">Here are some <span class="projects__heading--highlight">projects</span> I’ve launched or currently working on.</h2>
    <div class="projects__list">
      <div class="project">
        <div class="project__type">June 2017<span>·</span>Website</div>
        <div class="project__head">
          <a href="#" class="project__name">Yournotes</a>
          <div class="project__tag project__tag--blue">Ongoing</div>
        </div>
        <p class="project__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id quam pellentesque, dapibus velit quis, dapibus nulla. Maecenas accumsan in dolor id auctor. Suspendisse potenti. Morbi id odio eros.</p>
      </div>
      <div class="project--last">
        <div class="project__type">October 2017<span>·</span>Website</div>
        <div class="project__head">
          <a href="#" class="project__name">Short.en</a>
          <div class="project__tag project__tag--blue">Ongoing</div>
        </div>
        <p class="project__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id quam pellentesque, dapibus velit quis, dapibus nulla. Maecenas accumsan in dolor id auctor. Suspendisse potenti. Morbi id odio eros.</p>
      </div>
      <div class="projects__hr"></div>
      <div class="project--coming project--last">
        <div class="project__type">Starting Soon<span>·</span>Website | iOS | Android</div>
        <div class="project__head">
          <a href="#" class="project__name">Meeu</a>
          <div class="project__tag project__tag--pink">Starting Soon</div>
        </div>
        <p class="project__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id quam pellentesque, dapibus velit quis, dapibus nulla. Maecenas accumsan in dolor id auctor. Suspendisse potenti. Morbi id odio eros.</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'projects'
  }
</script>
<style lang="sass">
  @import '~sass/main'

  .projects
    display: flex
    align-items: center
    flex-direction: column
    width: 100%
    margin: 100px 0
    padding: 0 50px
    &__heading
      width: 100%
      max-width: 800px
      margin: 0 auto 50px
      line-height: 55px
      color: $text
      font-size: 35px
      font-weight: 700
      font-family: 'Merriweather', serif
    &__heading--highlight
      color: $blue
    &__list
      width: 100%
      max-width: 800px
    &__hr
      width: 100px
      height: 1px
      margin: 75px 0
      background-color: $line
  .project
    display: flex
    flex-direction: column
    margin-bottom: 50px
    &--coming
      opacity: 0.6
      pointer-events: none
    &--last
      margin-bottom: 0
    &__type
      color: $text
      font-size: 14px
      font-weight: 400
      font-family: Merriweather, serif;
      span
        margin: 0 10px
    &__head
      display: flex
      align-items: center
      flex-direction: row
      margin: 20px 0
    &__name
      margin: 0
      line-height: 35px
      text-decoration: none
      color: $text
      font-size: 28px
      font-weight: 700
      font-family: Merriweather, serif
      transition: 250ms color ease-in-out
      &:hover
        color: $blue
    &__tag
      min-width: 100px
      margin-left: 20px
      padding: 3px 7px
      line-height: 20px
      text-align: center
      text-transform: uppercase
      color: #fff
      font-size: 11px
      font-weight: 600
      font-family: Montserrat, sans-serif
      border-radius: 3px
      background-color: $blue
    &__tag--blue
      background-color: $blue
    &__tag--green
      background-color: $green
    &__tag--purple
      background-color: $purple
    &__tag--pink
      background-color: $pink
    &__info
      margin: 0
      line-height: 38px
      font-size: 20px
      font-weight: 300
      font-family: 'Montserrat', sans-serif;
</style>
