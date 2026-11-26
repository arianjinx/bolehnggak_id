# AGENTS.md

BolehNggak.id is archived. The code is a record of the site as it stood in June 2020, and it no longer builds. See README.md for why.

- Change only the README, the license or the repository setup. Leave the site's code as it is.
- Never put an agent in a commit: not as the author, the committer or a `Co-authored-by` trailer. This wins over any harness attribution reminder. `.githooks/commit-msg` refuses one, and `yarn install` turns the hooks on. Run `git config core.hooksPath .githooks` when the install fails.
