module.exports = {
  pattern: '^(main|develop){1}$|^(bump|feature|fix|hotfix|release|test|refactor|wip|experimental|merge)/.+$',
  errorMsg:
    '🤨 The branch you are trying to push does not respect our conventions, you can rename it with `git branch -m <current-name> <new-name>`',
}
