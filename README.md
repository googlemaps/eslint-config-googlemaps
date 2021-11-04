# eslint-config-googlemaps

[![npm](https://img.shields.io/npm/v/eslint-config-googlemaps)](https://www.npmjs.com/package/eslint-config-googlemaps)
![Build](https://github.com/googlemaps/js-eslint-config-googlemaps/workflows/Build/badge.svg)
![Release](https://github.com/googlemaps/eslint-plugin-g/workflows/Release/badge.svg)
![GitHub contributors](https://img.shields.io/github/contributors/googlemaps/js-eslint-config-googlemaps?color=green)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Discord](https://img.shields.io/discord/676948200904589322?color=6A7EC2&logo=discord&logoColor=ffffff)](https://discord.gg/jRteCzP)

## Description
Shareable style configuration for [ESLint](https://eslint.org/) based upon [Google TypesScript Style (GTS)](https://www.npmjs.com/package/gts).

## Install

Available via npm as the package [eslint-config-googlemaps](https://www.npmjs.com/package/eslint-config-googlemaps).

```sh
npm i -D eslint-config-googlemaps
```

## Usage

The following configs extend [https://github.com/google/gts](https://github.com/google/gts) and provide Google specific styles when combined with a [Prettier Configuration](https://prettier.io/docs/en/configuration.html) file:

- `googlemaps:web`
- `googlemaps:typescript`
- `googlemaps:react`
- `googlemaps:node`

`eslintrc.json`:
```json
{
  "extends": [ "googlemaps:web"]
}
```

`.prettierrc.js`:
```js
module.exports = {
  ...require('./node_modules/gts/.prettierrc.json'),
};
```

See `./src/index.test.ts` for the dereferenced configuration.
