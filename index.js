const isFunc = maybeFunc => {
  if (typeof maybeFunc === 'function') return true
  throw new Error('`compositter` expected Array<Function> type.')
}

module.exports = funcs => funcs.reverse().filter(isFunc).reduce((g, f) => x => g(f(x)))
