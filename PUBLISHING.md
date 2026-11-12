# Publishing checklist

The 100 `packages/*` workspaces are first-party demonstration utilities, not independent third-party adoption or 100 separate GitHub repositories.

## Prepare the core package

Check [GitHub Actions](https://github.com/sasoriwallet/sasori-100-packages/actions) and review all source files, tests, package contents and the MIT license.

From a local clone:

```sh
npm install
npm test
npm pack --dry-run --workspace=core
```

## Initial npm publication (npm owner required)

1. Create or sign into your own npm account.
2. Verify the name `sasori-mini-utils` is available to your account. If not, rename it and update every dependent package accordingly.
3. Locally run `npm login` and `npm whoami`.
4. Review files and use `npm publish --workspace=core --access public` once you are ready.
5. Verify with `npm view sasori-mini-utils version` and install it into an independent test project.

Do not put npm passwords, one-time codes or write tokens in the repository or chat.

For future publishing, npm supports GitHub Actions trusted publishing with OIDC after the npm package owner configures the relationship: https://docs.npmjs.com/trusted-publishers/

## Adoption

Publishing first-party workspaces does not establish 100 independent dependent packages and should not be represented as evidence of third-party adoption in open-source program applications.


## First three scoped packages (prepared, not published)

Your npm user scope is `@himthegoattt`. The following three first-party
packages have been given this scope, separate release metadata, documentation,
and strengthened tests:

- `@himthegoattt/blog-excerpt`
- `@himthegoattt/docs-anchor-index`
- `@himthegoattt/store-manifest`

Before attempting publication, sync your local clone and run:

```cmd
cd /d %USERPROFILE%\Desktop\sasori-100-packages
git pull
npm install
npm test
npm pack --dry-run --workspace=packages/blog-excerpt
npm pack --dry-run --workspace=packages/docs-anchor-index
npm pack --dry-run --workspace=packages/store-manifest
```

Review the packaged files. To publish the selected packages **individually**,
authenticated as `himthegoattt`, run one command at a time and complete npm
security verification when prompted:

```cmd
npm publish --workspace=packages/blog-excerpt --access public
npm publish --workspace=packages/docs-anchor-index --access public
npm publish --workspace=packages/store-manifest --access public
```

Do not use `npm publish --workspaces`: the other 97 packages have not
been renamed or individually prepared for release. Publishing these three
first-party modules does not establish independent adoption or make the
project eligible for grant programs by itself.
