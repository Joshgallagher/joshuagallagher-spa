<template>
  <div class="article">
    <navigation></navigation>
    <div class="article__wrapper">
      <div class="article__header">
        <h1 class="article__heading">Custom Validation Rules</h1>
        <div class="article__info">October 27, 2017<span>·</span>By Joshua Gallagher</div>
      </div>
      <div class="article__content">
        <h2>Introduction</h2>
        <p><strong>This is a tutorial that I wanted to write for a very long time.</strong></p>
        <p>The reason why I didn't is because I couldn't imagine a single rule that could be beneficial and does not already come with Laravel.</p>
        <p><i>Are you ready?</i></p>
        <p>In this tutorial, we will create a custom validation rule for:</p>
        <pre>if($number % 2 == 0) return true;</pre>
        <p><code>$number</code> being the value passed in the request, and <code>2</code> being the parameter that we want to divide it by.</p>
        <p><strong>The <code>%</code> operator computes the remainder after dividing its first operand by its second.</strong></p>
        <p>The above code will return true if the remainder equals zero.</p>
        <p>This would be the desired end syntax for our validation rule:</p>
        <pre>$this->validate($request, [
    'number' => 'required|numeric|mod:2'
]);</pre>
        <p>P.S. If you want to learn more about standard Validation, there are a couple of tutorials on this site that cover that topic:</p>
        <ul>
          <li>Different ways of validating requests</li>
          <li>Elementary Laravel: Validation</li>
          <li>Validating Form Arrays</li>
        </ul>
        <h2>Hack all day, hack all night</h2>
        <p>Let's begin.</p>
        <p>There are two ways of registering custom validation rules:</p>
        <ol>
          <li>Using the <code>extend</code> method on the <code>Validator</code> facade</li>
          <li>Using the <code>extendImplicit</code> method on the <code>Validator</code> facade</li>
        </ol>
        <p>The <code>extendImplicit</code> method enables you to run your custom validation rule on a empty attribute (The value is <code>null</code>). By default, rules are not executed on attributes that have a value of null. <i>We won't be needing this for this tutorial, but it is good to know.</i></p>
        <p>Both <code>extend</code> and <code>extendImplicit</code> methods support two ways of registering rules:</p>
        <p><strong>Using a Closure</strong></p>
        <pre>Validator::extend('foo', function ($attribute, $value, $parameters, $validator) {
    return $value == 'foo';
});</pre>
        <p>or</p>
        <p><strong>Passing a class and method</strong></p>
        <pre>Validator::extend('foo', 'FooValidator@validate');</pre>
        <p><i>For this tutorial we will use a Closure.</i></p>
        <h2>Using a Closure</h2>
        <pre>Validator::extend('foo', function ($attribute, $value, $parameters, $validator) {
    return $value == 'foo';
});</pre>
        <p>The custom validator Closure receives four arguments: the name of the <code>$attribute</code> being validated, the <code>$value</code> of the attribute, an array of <code>$parameters</code> passed to the rule, and the <code>Validator</code> instance.</p>
        <p>So to modify the code above to our needs we will want to do:</p>
        <pre>\Validator::extend('mod', function ($attribute, $value, $parameters, $validator) {
    return $value % $parameters[0] == 0;
});</pre>
        <p>Great! Now paste the above code to your <code>app/Providers/AppServiceProvider@boot</code> method.</p>
        <h2>Validate this!</h2>
        <p>You can use our newly created validation rule from your controller methods, like so:</p>
        <pre>$this->validate($request, [
    'number' => 'required|numeric|mod:2'
]);</pre>
        <p>or from your <code>routes/web.php</code> routes file, like so:</p>
        <pre>Route::get('/', function (\Illuminate\Http\Request $request) {
    $validator = \Validator::make($request->all(), [
        'number' => 'required|numeric|mod:2'
    ]);

    if($validator->fails())
    {
        return $validator->errors();
    }

    return "Validation passed!!";
});</pre>
        <h2>Defining the error message</h2>
        <p>To provide a pretty error message for our custom validation rule, you should add:</p>
        <pre>"mod" => "Your input was invalid!",</pre>
        <p>to the first level of the array in <code>resources/lang/en/validation.php</code>.</p>
        <hr>
        <p>You can see the whole code for this tutorial on GitHub. Or just the code for this tutorial here.</p>
        <p>Thank you for reading! Let me know if you have any other examples for this tutorial in the comments bellow.</p>
        <h2>Sources</h2>
        <ul>
          <li>Laravel: Custom Validation Rules</li>
        </ul>
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
            'date': 'October 27, 2017',
            'author': 'Joshua Gallagher',
            'teaser': 'Sed venenatis, justo quis ornare egestas, velit augue lacinia orci, in vehicula risus ipsum vitae mi. Maecenas magna elit, mattis quis urna vitae, tempor tincidunt velit. Nam ornare nisl arcu. Mauris blandit in ante sit amet hendrerit.'
          },
          {
            'id': 2,
            'title': 'Laravel Scout with Vue.js instant search',
            'date': 'October 27, 2017',
            'author': 'Joshua Gallagher',
            'teaser': 'Nulla dictum maximus tortor ac tempor. In hac habitasse platea dictumst. Cras tempus congue dui. Suspendisse ac eros vitae turpis posuere rutrum. Etiam vel erat ante. Etiam in tellus nunc. Ut ut neque est. Etiam ullamcorper justo ut tellus fermentum, eget suscipit lectus viverra.'
          },
          {
            'id': 3,
            'title': 'Vue.js - How to Vuex',
            'date': 'October 27, 2017',
            'author': 'Joshua Gallagher',
            'teaser': 'Ut vehicula, est ac venenatis aliquet, dui mauris euismod quam, in sollicitudin nunc nibh at eros. Phasellus tempor orci nec ligula fringilla consequat.'
          },
          {
            'id': 4,
            'title': 'Understanding OAuth 2.0',
            'date': 'October 27, 2017',
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
      *:first-child
        margin-top: 0
      *:last-child
        margin-bottom: 0
      h2
        margin: 50px 0 25px
        line-height: 35px
        text-decoration: none
        color: $text
        font-size: 28px
        font-weight: 700
        font-family: Merriweather, serif
      p
        margin: 0 0 25px 0
        line-height: 38px
        color: $text
        font-size: 20px
        font-weight: 300
        font-family: 'Montserrat', sans-serif
        &:last-child
          margin-bottom: 0
      pre
        margin: 25px 0
        padding: 20px
        color: $text
        line-height: 28px
        font-size: 15px
        font-family: Menlo, Monaco, Consolas, "Courier New", monospace
        background-color: $bg
        border-radius: 3px
      code
        padding: 2px 4px
        font-size: 90%
        color: $blue
        background-color: rgba($blue, .10)
        border-radius: 3px
      ul, ol
        margin-bottom: 25px
        li
          margin: 0 0 10px 0
          line-height: 38px
          font-size: 20px
          font-weight: 300
          font-family: 'Montserrat', sans-serif
          &:last-child
            margin-bottom: 0
      hr
        display: block
        width: 100px
        height: 1px
        margin: 50px 0 50px
        background-color: $line
        border: none
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
