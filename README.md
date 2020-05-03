# @thumbsup/theme-flow

[![NPM](https://img.shields.io/npm/v/@thumbsup/theme-flow.svg?style=flat)](https://www.npmjs.com/package/@thumbsup/theme-flow)
[![Travis CI](https://travis-ci.org/thumbsup/theme-flow.svg?branch=master)](https://travis-ci.org/thumbsup/theme-flow)

One of the built-in themes for https://github.com/thumbsup/thumbsup.

---

## Usage

```bash
thumbsup --theme flow
```

## Theme options

- The `featuredAlbum` option will show the album with the specified name (if it exists)
as a slider at the top of the gallery homepage instead of listing it as a normal album.
This album must be top-level, and any sub-albums will be ignored.

## Screenshots

![albums](docs/albums.png)
![media](docs/media.png)

## Developing

Testing the theme

```bash
thumbsup --input /photos --output ./tmp --theme-path ./theme
```

Publishing the theme:

```bash
npm publish --access=public
```
