# Contributing

## Install

1. Install git
2. [Install nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
3. Clone the repository and move into the directory
    ```
    git clone https://github.com/thomasjwilliam/hai-mono.git
    cd hai-mono
    ```
4. Use the correct node/npm version (and install correct node and npm version if missing)
    ```
    nvm install
    ```
5. Install all the necessary dependencies
    ```
    npm install
    ```

## <a name="commit"></a> Commit Message Format

#### <a name="commit-header"></a>Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: service-api|service-api|...
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.


##### Type

Must be one of the following:

* **chore**: Changes that affect tooling, build system or external dependencies (example scopes: npm, webpack)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **test**: Adding missing tests or correcting existing tests


##### Scope

The following is the list of supported scopes:

* `my-app`
* `my-app-e2e`
* `client-app`
* `client-dashboard`
* `component-library`

There are currently a few exceptions to the rule:

* `changelog`: used for updating the release notes in CHANGELOG.md
* none/empty string: useful for `test` and `refactor` changes that are done across all packages (e.g. `test: add missing unit tests`) and for docs changes that are not related to a specific package (e.g. `docs: add more contributing guidelines`).


##### Summary

Use the summary field to provide a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end
