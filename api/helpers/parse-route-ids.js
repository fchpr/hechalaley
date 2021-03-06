const parseIdsRegex = /[a-f\d]{24}(,[a-f\d]{24})+/

module.exports = (paramKey) => (req, res, next) => {
  if (!parseIdsRegex.test(req.params[paramKey])) {
    return next('route')
  }

  req.params[paramKey] = req.params[paramKey].split(',')

  return next()
}
