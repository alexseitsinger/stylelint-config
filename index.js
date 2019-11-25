module.exports = {
  extends: [
    "./rules/limit-language-features",
    "./rules/possible-errors",
    "./rules/stylistic-issues",
  ].map(require.resolve),
}
