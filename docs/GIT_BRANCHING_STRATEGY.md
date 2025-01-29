# GitHub Flow Branching Strategy

## Key Branches

- **main**: Production-ready code.
- **Feature Branches**: Created directly from `main`.

## Branch Naming Examples

- `feature/add-login-tests`
- `bugfix/fix-timeout-issue`

## Guidelines

1. Any code in the `main` branch should be deployable.
2. Create new descriptively-named branches off the `main` branch for new work (e.g., `feature/add-new-payment-types`).
3. Commit new work to your local branches and regularly push work to the remote by following the [commit message guidelines](docs\COMMIT_MESSAGE_GUIDELINES.md)
4. When you think your work is ready to merge into the `main` branch, open a **pull request**.
5. Should run **Playwright tests** in CI for every pull request.
6. **Code reviewers** should check the PR before merging.
7. After work or feature has been reviewed and approved, it can be merged into the `main` branch **only after tests pass**.
8. Once your work has been merged into the `main` branch, it should be deployed/executed immediately.
