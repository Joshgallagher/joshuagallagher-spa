<template>
    <div class="posts">
    <div class="posts__list">
      <div class="post">
        <div class="post__type">29/09/17<span>·</span>By Joshua Gallagher</div>
        <a href="#" class="post__name post__name--pink">Lumen with Laravel JWT</a>
        <p class="post__info">Sed venenatis, justo quis ornare egestas, velit augue lacinia orci, in vehicula risus ipsum vitae mi. Maecenas magna elit, mattis quis urna vitae, tempor tincidunt velit. Nam ornare nisl arcu. Mauris blandit in ante sit amet hendrerit.</p>
      </div>
      <div class="post">
        <div class="post__type">23/09/17<span>·</span>By Joshua Gallagher</div>
        <a href="#" class="post__name post__name--green">Lumen: Password Resets</a>
        <p class="post__info">Nulla dictum maximus tortor ac tempor. In hac habitasse platea dictumst. Cras tempus congue dui. Suspendisse ac eros vitae turpis posuere rutrum. Etiam vel erat ante. Etiam in tellus nunc. Ut ut neque est. Etiam ullamcorper justo ut tellus fermentum, eget suscipit lectus viverra.</p>
      </div>
      <div class="post">
        <div class="post__type">17/09/17<span>·</span>By Joshua Gallagher</div>
        <a href="#" class="post__name post__name--blue">Fractal with Lumen</a>
        <p class="post__info">Ut vehicula, est ac venenatis aliquet, dui mauris euismod quam, in sollicitudin nunc nibh at eros. Phasellus tempor orci nec ligula fringilla consequat. In hac habitasse platea dictumst. Cras tempus congue dui. Suspendisse ac eros vitae turpis posuere rutrum.</p>
      </div>
      <div class="post">
        <div class="post__type">11/09/17<span>·</span>By Joshua Gallagher</div>
        <a href="#" class="post__name post__name--purple">Hello, World!</a>
        <p class="post__info">Ut vehicula, est ac venenatis aliquet, dui mauris euismod quam, in sollicitudin nunc nibh at eros. Phasellus tempor orci nec ligula fringilla consequat.</p>
      </div>
      <a href="#" class="posts__load">Load More</a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'articles'
  }
</script>
<style lang="sass">
  @import '~sass/main'

  .posts
    display: flex
    align-items: center
    flex-direction: column
    width: 100%
    margin: 100px 0
    padding: 0 50px
    &__list
      display: flex
      flex-direction: column
      align-items: center
      width: 100%
      max-width: 800px
    &__load
      display: flex
      margin: 50px 0 0 0
      text-decoration: none
      color: $text
      font-size: 12px
      font-weight: 700
      font-family: 'Merriweather', serif
  .post
    display: flex
    flex-direction: column
    margin-bottom: 50px
    &__type
      color: $text
      font-size: 14px
      font-weight: 400
      font-family: Merriweather, serif;
      span
        margin: 0 10px
    &__name
      margin: 20px 0
      line-height: 35px
      text-decoration: none
      color: $text
      font-size: 28px
      font-weight: 700
      font-family: Merriweather, serif
      transition: 250ms color ease-in-out
      &--blue
        color: $blue
        &:hover
          color: $dblue
      &--pink
        color: $pink
        &:hover
          color: $dpink
      &--purple
        color: $purple
        &:hover
          color: $dpurple
      &--green
        color: $green
        &:hover
          color: $dgreen
    &__info
      margin: 0
      line-height: 38px
      font-size: 20px
      font-weight: 300
      font-family: 'Montserrat', sans-serif;
</style>
