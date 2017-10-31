import errors from './errors/routes'
import portfolio from './portfolio/routes'
import blog from './blog/routes'

export default [
  ...errors,
  ...portfolio,
  ...blog
]
