# @trague/stylelint-config

[![npm version](https://img.shields.io/npm/v/@trague/stylelint-config.svg)](https://www.npmjs.org/package/@trague/stylelint-config)

> A shareable stylelint configuration object for `*.vue`, `*.scss`, `*.css`.

## Install

> ⚠️ You don't need to install `stylelint` since this package already does that for you.

```
npm install --save --dev @trague/stylelint-config
```

## Usage

Within your [stylelint config object](https://stylelint.io/user-guide/configure#extends) You can extend this configuration. This will serve as a base for your config, then you can make overrides in your own config object:

```json
{
  "extends": ["@trague/stylelint-config"]
}
```
