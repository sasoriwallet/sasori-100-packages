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
