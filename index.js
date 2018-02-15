module.exports = funcs => funcs.reverse().reduce((g, f) => x => g(f(x)))
