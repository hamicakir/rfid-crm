## Packaging

To package apps for the local platform:

```bash
$ yarn package
```

To package apps for all platforms:

First, refer to the [Multi Platform Build docs](https://www.electron.build/multi-platform-build) for dependencies.

Then,

```bash
$ yarn package-all
```

To package apps with options:

```bash
$ yarn package --[option]
```

To run End-to-End Test

```bash
$ yarn build-e2e
$ yarn test-e2e

# Running e2e tests in a minimized window
$ START_MINIMIZED=true yarn build-e2e
$ yarn test-e2e
```

:bulb: You can debug your production build with devtools by simply setting the `DEBUG_PROD` env variable:

```bash
DEBUG_PROD=true yarn package
```

## CSS Modules

This boilerplate is configured to use [css-modules](https://github.com/css-modules/css-modules) out of the box.

All `.css` file extensions will use css-modules unless it has `.global.css`.

If you need global styles, stylesheets with `.global.css` will not go through the
css-modules loader. e.g. `app.global.css`

If you want to import global css libraries (like `bootstrap`), you can just write the following code in `.global.css`:

```css
@import '~bootstrap/dist/css/bootstrap.css';
```

## SASS support

If you want to use Sass in your app, you only need to import `.sass` files instead of `.css` once:

```js
import './app.global.scss';
```

## Static Type Checking

This project comes with Flow support out of the box! You can annotate your code with types, [get Flow errors as ESLint errors](https://github.com/amilajack/eslint-plugin-flowtype-errors), and get [type errors during runtime](https://github.com/codemix/flow-runtime) during development. Types are completely optional.

## Dispatching redux actions from main process

See [#118](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/118) and [#108](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/108)

## How to keep your project updated with the boilerplate

If your application is a fork from this repo, you can add this repo to another git remote:

```sh
git remote add upstream https://github.com/electron-react-boilerplate/electron-react-boilerplate.git
```

Then, use git to merge some latest commits:

```sh
git pull upstream master
```

## Maintainers

- [Vikram Rangaraj](https://github.com/vikr01)
- [Amila Welihinda](https://github.com/amilajack)
- [C. T. Lin](https://github.com/chentsulin)
- [Jhen-Jie Hong](https://github.com/jhen0409)

## Backers

Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/electron-react-boilerplate#backer)]

<a href="https://opencollective.com/electron-react-boilerplate/backer/0/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/1/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/2/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/3/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/4/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/5/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/6/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/7/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/8/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/9/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/9/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/10/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/10/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/11/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/11/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/12/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/12/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/13/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/13/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/14/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/14/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/15/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/15/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/16/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/16/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/17/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/17/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/18/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/18/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/19/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/19/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/20/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/20/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/21/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/21/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/22/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/22/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/23/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/23/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/24/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/24/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/25/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/25/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/26/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/26/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/27/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/27/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/28/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/28/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/backer/29/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/backer/29/avatar.svg"></a>

## Sponsors

Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/electron-react-boilerplate#sponsor)]

<a href="https://opencollective.com/electron-react-boilerplate/sponsor/0/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/1/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/2/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/3/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/4/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/5/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/6/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/7/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/8/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/9/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/9/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/10/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/10/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/11/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/11/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/12/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/12/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/13/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/13/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/14/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/14/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/15/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/15/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/16/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/16/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/17/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/17/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/18/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/18/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/19/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/19/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/20/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/20/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/21/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/21/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/22/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/22/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/23/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/23/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/24/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/24/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/25/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/25/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/26/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/26/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/27/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/27/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/28/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/28/avatar.svg"></a>
<a href="https://opencollective.com/electron-react-boilerplate/sponsor/29/website" target="_blank"><img src="https://opencollective.com/electron-react-boilerplate/sponsor/29/avatar.svg"></a>

## License

MIT © [Electron React Boilerplate](https://github.com/electron-react-boilerplate)

[npm-image]: https://img.shields.io/npm/v/electron-react-boilerplate.svg?style=flat-square
[github-tag-image]: https://img.shields.io/github/tag/electron-react-boilerplate/electron-react-boilerplate.svg
[github-tag-url]: https://github.com/electron-react-boilerplate/electron-react-boilerplate/releases/latest
[travis-image]: https://travis-ci.com/electron-react-boilerplate/electron-react-boilerplate.svg?branch=master
[travis-url]: https://travis-ci.com/electron-react-boilerplate/electron-react-boilerplate
[appveyor-image]: https://ci.appveyor.com/api/projects/status/github/electron-react-boilerplate/electron-react-boilerplate?svg=true
[appveyor-url]: https://ci.appveyor.com/project/electron-react-boilerplate/electron-react-boilerplate/branch/master
[david_img]: https://img.shields.io/david/electron-react-boilerplate/electron-react-boilerplate.svg
[david_site]: https://david-dm.org/electron-react-boilerplate/electron-react-boilerplate
[david_img_dev]: https://david-dm.org/electron-react-boilerplate/electron-react-boilerplate/dev-status.svg
[david_site_dev]: https://david-dm.org/electron-react-boilerplate/electron-react-boilerplate?type=dev
