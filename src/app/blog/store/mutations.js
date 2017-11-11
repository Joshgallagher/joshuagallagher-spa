export const setArticle = (state, article) => {
  state.article = article
}

export const setArticles = (state, articles) => {
  state.articles = articles
}

export const setArticlesMeta = (state, meta) => {
  state.meta = meta
}

export const appendArticles = (state, articles) => {
  articles.forEach(article => state.articles.push(article))
}
