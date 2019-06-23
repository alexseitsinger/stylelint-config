module.exports = {
  extends: [
    "./lib/limit-language-features",
    "./lib/possible-errors",
    "./lib/stylistic-issues",
  ].map(require.resolve),
}
