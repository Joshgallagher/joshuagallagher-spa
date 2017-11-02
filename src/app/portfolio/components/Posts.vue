<template>
  <div class="posts">
    <h2 class="posts__heading">Check out my <span class="posts__heading--highlight">blog</span> where I post tech guides and the odd off topic post.</h2>
    <div class="posts__list">
      <div class="post">
        <div class="post__type">29/09/17<span>·</span>By Joshua Gallagher</div>
        <div class="post__head">
          <a href="#" class="post__name">Lumen with Laravel JWT</a>
          <div class="post__tag post__tag">Blog Post</div>
        </div>
        <p class="post__info">Sed venenatis, justo quis ornare egestas, velit augue lacinia orci, in vehicula risus ipsum vitae mi. Maecenas magna elit, mattis quis urna vitae, tempor tincidunt velit. Nam ornare nisl arcu. Mauris blandit in ante sit amet hendrerit.</p>
      </div>
      <div class="post">
        <div class="post__type">23/09/17<span>·</span>By Joshua Gallagher</div>
        <div class="post__head">
          <a href="#" class="post__name">Lumen: Password Resets</a>
          <div class="post__tag post__tag">Blog Post</div>
        </div>
        <p class="post__info">Nulla dictum maximus tortor ac tempor. In hac habitasse platea dictumst. Cras tempus congue dui. Suspendisse ac eros vitae turpis posuere rutrum. Etiam vel erat ante. Etiam in tellus nunc. Ut ut neque est. Etiam ullamcorper justo ut tellus fermentum, eget suscipit lectus viverra.</p>
      </div>
      <div class="post--last">
        <div class="post__type">11/09/17<span>·</span>By Joshua Gallagher</div>
        <div class="post__head">
          <a href="#" class="post__name">Hello, World!</a>
          <div class="post__tag post__tag">Blog Post</div>
        </div>
        <p class="post__info">Ut vehicula, est ac venenatis aliquet, dui mauris euismod quam, in sollicitudin nunc nibh at eros. Phasellus tempor orci nec ligula fringilla consequat.</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'posts'
  }
</script>
<style lang="sass">
  @import '~sass/main'

  .posts
    display: flex
    align-items: center
    flex-direction: column
    width: 100%
    padding: 0 50px
    &__heading
      width: 100%
      max-width: 800px
      margin: 0 auto 50px
      line-height: 55px
      color: $text
      font-size: 35px
      font-weight: 700
      font-family: 'Merriweather', serif;
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
  .post
    display: flex
    flex-direction: column
    margin-bottom: 50px
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
      font-family: Merriweather, serif;
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
      background-color: $purple
    &__info
      margin: 0
      line-height: 38px
      font-size: 20px
      font-weight: 300
      font-family: 'Montserrat', sans-serif;
</style>
