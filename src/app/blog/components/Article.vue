<template>
  <div class="article">
    <navigation></navigation>
    <div class="article__wrapper">
      <div class="article__header">
        <h1 class="article__heading">Laravel Scout with Vue.js instant search</h1>
        <div class="article__info">29/08/17<span>·</span>By Joshua Gallagher</div>
      </div>
      <div class="article__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis enim in ante vehicula vehicula at nec dolor. Sed laoreet rhoncus dolor eu euismod. Vestibulum semper porttitor porta. Aenean aliquam magna augue, non convallis eros posuere nec. Aenean a ante ac augue molestie tincidunt in sit amet nibh. Nulla fringilla metus mauris, vel finibus lectus aliquam et. Duis scelerisque egestas nibh tempus lobortis.</p>
        <pre><?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\User;
use App\Transformers\UserTransformer;

class UserTransformerTest extends TestCase
{
    /**
     * @test
     */
    public function user_fields_are_transformed_to_an_array_for_a_json_response()
    {
        $user = factory(User::class)->create([
            'first_name' => 'Joshua',
            'last_name' => 'Gallagher',
        ]);

        $userTransformer = new UserTransformer();
        $transformedUser = $userTransformer->transform($user);

        $this->assertEquals('Joshua Gallagher', $transformedUser['name']);
    }
}
</pre>
        <p>Nunc sed dui eleifend, elementum dolor in, facilisis tortor. In blandit, mauris ut egestas dictum, arcu ipsum molestie ex, ac facilisis eros tellus ut justo. Nunc volutpat vestibulum enim sed viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce porttitor est eu erat facilisis tincidunt. Pellentesque maximus nisi eget eleifend commodo. Phasellus tincidunt, libero a facilisis viverra, nisl orci dapibus velit, a efficitur tortor magna eget tellus. Sed euismod quis ante vitae placerat. Vestibulum cursus urna non orci finibus, vitae vestibulum ex tincidunt.</p>
        <pre>
$userTransformer = new UserTransformer();</pre>
        <p>Pellentesque vitae luctus nunc. Nam justo leo, viverra ac ante at, luctus convallis nibh. Vivamus scelerisque ac magna eget interdum. Maecenas laoreet sollicitudin arcu, ac cursus lectus mattis id. Quisque massa turpis, elementum at ante lobortis, molestie egestas lectus. Vestibulum scelerisque metus nec magna imperdiet vulputate. Fusce at libero tellus. Pellentesque mollis maximus mi, a faucibus sem posuere vel. Vivamus placerat eget erat a lobortis. Quisque blandit nisi erat, sit amet scelerisque erat mattis non. Cras pellentesque semper egestas.</p>
        <p>Duis lobortis, lacus et consectetur pretium, justo urna accumsan ex, at eleifend nisl lectus id dolor. Nam eros urna, <code>pretium eu tellus sit amet</code>, vestibulum pretium arcu. Mauris scelerisque nisi ultricies, tincidunt ex sit amet, finibus ipsum. Suspendisse tempus malesuada augue eget rhoncus. Vivamus tristique convallis rhoncus. Duis rhoncus, nulla quis faucibus vestibulum, lacus turpis dapibus lacus, in semper lacus tellus ut urna. Integer nec risus id odio iaculis ultrices. Praesent efficitur lacus eu libero elementum, non rutrum urna mollis. Vivamus non ullamcorper leo. Fusce cursus ornare augue at gravida. Fusce sagittis dui eu massa commodo sagittis. Nullam at tellus condimentum, eleifend ex a, porta sem. Cras sapien arcu, fermentum non molestie id, vulputate nec ipsum. In in justo nec metus pretium rhoncus vel sed arcu.</p>
        <p>Nulla elementum non diam non volutpat. Vivamus dictum hendrerit aliquam. Maecenas nec metus turpis. Vestibulum ut porttitor neque, eu maximus augue. Proin lobortis euismod tempor. Etiam et felis eu nibh auctor vehicula sodales sed odio. Suspendisse fermentum cursus nulla, sit amet dignissim metus sagittis eget. Nullam iaculis mi id tellus blandit, et placerat quam rhoncus. Aliquam semper tortor mi. In fermentum ultrices vehicula. Morbi hendrerit cursus ligula et pretium. Sed libero urna, ultrices sed justo vitae, auctor tempor purus. Etiam augue velit, venenatis sed sagittis nec, sagittis eget ligula. Praesent porta lacus at libero euismod, hendrerit malesuada risus tincidunt. Nulla non velit mollis, luctus lectus a, consectetur nibh.</p>
      </div>
      <div class="article__articles">
        <h2 class="article__articles-heading">Latest Posts</h2>
        <div class="article__articles-list">
          <article-item v-for="(article, index) in articles" :article="article" :key="article.id" :index="index" :hasTeaser=false :length="articles.length"></article-item>
        </div>
      </div>
    </div>
    <page-end></page-end>
  </div>
</template>
<script>
  import navigation from './Navigation'
  import articleItem from './ArticleItem'
  import pageEnd from '@/app/global/components/PageEnd'

  export default {
    name: 'article',
    components: {
      navigation,
      articleItem,
      pageEnd
    },
    data () {
      return {
        articles: [
          {
            'id': 1,
            'title': 'How I structure my Vue.js projects',
            'date': '29/08/17',
            'author': 'Joshua Gallagher',
            'teaser': 'Sed venenatis, justo quis ornare egestas, velit augue lacinia orci, in vehicula risus ipsum vitae mi. Maecenas magna elit, mattis quis urna vitae, tempor tincidunt velit. Nam ornare nisl arcu. Mauris blandit in ante sit amet hendrerit.'
          },
          {
            'id': 2,
            'title': 'Laravel Scout with Vue.js instant search',
            'date': '29/08/17',
            'author': 'Joshua Gallagher',
            'teaser': 'Nulla dictum maximus tortor ac tempor. In hac habitasse platea dictumst. Cras tempus congue dui. Suspendisse ac eros vitae turpis posuere rutrum. Etiam vel erat ante. Etiam in tellus nunc. Ut ut neque est. Etiam ullamcorper justo ut tellus fermentum, eget suscipit lectus viverra.'
          },
          {
            'id': 3,
            'title': 'Vue.js - How to Vuex',
            'date': '29/08/17',
            'author': 'Joshua Gallagher',
            'teaser': 'Ut vehicula, est ac venenatis aliquet, dui mauris euismod quam, in sollicitudin nunc nibh at eros. Phasellus tempor orci nec ligula fringilla consequat.'
          },
          {
            'id': 4,
            'title': 'Understanding OAuth 2.0',
            'date': '29/08/17',
            'author': 'Joshua Gallagher',
            'teaser': 'Sed venenatis, justo quis ornare egestas, velit augue lacinia orci, in vehicula risus ipsum vitae mi. Maecenas magna elit, mattis quis urna vitae, tempor tincidunt velit. Nam ornare nisl arcu. Mauris blandit in ante sit amet hendrerit.'
          }
        ]
      }
    }
  }
</script>
<style lang="sass">
  @import '~sass/main'

  .article
    &__wrapper
      display: flex
      align-items: center
      flex-direction: column
      width: 100%
      padding: 0 50px
    &__header
      width: 100%
      max-width: 800px
      margin: 100px 0 50px 0
    &__heading
      width: 100%
      margin: 0 0 20px 0
      line-height: 75px
      color: $text
      font-size: 60px
      font-weight: 700
      font-family: 'Merriweather', serif
    &__info
      color: $text
      font-size: 14px
      font-weight: 400
      font-family: Merriweather, serif;
      span
        margin: 0 10px
    &__content
      width: 100%
      max-width: 800px
      p
        margin: 0 0 25px 0
        line-height: 38px
        font-size: 20px
        font-weight: 300
        font-family: 'Montserrat', sans-serif
        &:last-child
          margin-bottom: 0
      pre
        padding: 20px
        line-height: 28px
        font-size: 15px
        font-family: Menlo, Monaco, Consolas, "Courier New", monospace
        background-color: $bg
        border-radius: 3px
    &__articles
      width: 100%
      max-width: 800px
      margin: 75px 0 100px
    &__articles-heading
      margin: 0 0 50px 0
      line-height: 55px
      color: $text
      font-size: 35px
      font-weight: 700
      font-family: 'Merriweather', serif
    &__articles-list
      width: 100%
      max-width: 800px
</style>
