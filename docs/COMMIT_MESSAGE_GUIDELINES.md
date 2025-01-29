# Commit Message Guidelines

## Guidelines

- A commit should represent a **single logical change**.
- **Avoid mixing unrelated changes** in one commit.

          ✅ Commit test cases for login functionality separately from a bug fix in the test utility.
          ❌ Combine login tests, utility fixes, and documentation updates in one commit.

- Avoid **generic messages** like:

          ❌ "Fix bug" → ✅ "fix(auth): resolve invalid token error"
          ❌ "Add tests" → ✅ "test(cart): add tests for discount functionality"

- Before merging, **squash unnecessary commits** into meaningful ones to keep the history clean. Use `git rebase` to clean up history during pull requests.

---

## Commit Types

- **feat**: New feature (e.g., "feat(auth): add login tests")
- **fix**: Bug fix (e.g., "fix(api): resolve timeout issue in API tests")
- **test**: Related to tests (e.g., "test: add e2e tests for cart functionality")
- **docs**: Documentation updates (e.g., "docs: update README with setup steps")
- **refactor**: Code refactoring (e.g., "refactor: simplify test utility functions")
- **style**: Code formatting, no functional changes (e.g., "style: format test files with Prettier")
- **chore**: Maintenance tasks (e.g., "chore: update Playwright to v1.33.0")

---

## Example of Good Commit Messages

            fix: resolve login timeout issue

            Updated the retry logic for login tests to handle network delays.

            Resolves #123

## Commit Message Format

```
        <type>(<scope>): <subject>
        <br>
        <body>
        <br>
        <footer>
```
