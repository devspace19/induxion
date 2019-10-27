# Induxion Development
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

> A Redux State Management for Central Distributed System

## Getting Started

Before start, please make sure that you have the followings:

- Node JS
- Yarn (Optional)

## Installation

- Clone this repo.
- Run `npm/yarn install`.
- That's it!

## Usage

Please read carefully for usage in development:

- First, please note that this project are still in __ALPHA__ stage. It means, we don't take any responsibility for any code error, bugs, etc.
- Our aim is to make this project as a distributed state management library for any applications you create.
- Scripts to Run:
    - `npm run watch` or `yarn watch`: For watching any code changes on `src`.
    - `npm run transpile` or `yarn transpile`: For final build to `build` directory.
    - `npm run prepublishOnly` or `yarn prepublishOnly`: To be added.
    - `npm test` or `yarn test`: For running testings.
    - `npm run start` or `yarn start`: For running example service.
        - Please note that this scripts has optional argument `--example` for specifying the example directory.
        - E.g. `npm run start -- --example=normal-redux` or `yarn run --example=normal-redux`.
- In order to correctly developing this project, do the followings:
    - Run the `watch` script first.
    - Run the `start` script after.
    - Start developing and testing.
- Next, the **Important Things**. Because we use internal `examples` folder to test, you must run (This is one-time action only):
    - `npm link` or `yarn link` first in this repo.
    - Then, run again `npm link @devspace/induxion` or `yarn link @devspace/induxion`.
    - Finally, you can `import` the `@devspace/induxion` module in your `example` projects.
    > Please note that this action is required for the first-time development. Or, you can check if the `@devspace/induxion` are linked to the development. Otherwise, you can't `import` automatically from your projects.

## Changelog

See the [CHANGELOG](CHANGELOG.md) for more informations.

## Contribution Guidelines

To Be Added.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/alziqziq"><img src="https://avatars1.githubusercontent.com/u/29282122?v=4" width="100px;" alt="Muhammad Al Ziqri"/><br /><sub><b>Muhammad Al Ziqri</b></sub></a><br /><a href="https://github.com/devspace19/induxion/commits?author=alziqziq" title="Ideas, Planning, Feedback & Code">☕️ - 💻</a></td>
    <td align="center"><a href="http://nurimansyahrifwan.com"><img src="https://avatars2.githubusercontent.com/u/2128638?v=4" width="100px;" alt="Nurimansyah Rifwan"/><br /><sub><b>Nurimansyah Rifwan</b></sub></a><br /><a href="https://github.com/devspace19/induxion/commits?author=nurimansyah89" title="Ideas, Planning, Feedback & Code">🤔💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

> To add some contributors, just run `npx all-contributors add [GITHUB_USERNAME] [TYPE]`, where the type can be one of [this](https://allcontributors.org/docs/en/emoji-key).

## License

See the [LICENSE](LICENSE.md) for more informations.

## Caveats

Again, this project is still in __ALPHA__ development, so don't hesitate to ask us for contributing to this project. Feel free to drop us a message to:

- alziqziq@gmail.com
- nurimansyah.rifwan@gmail.com

- - -
Copyright (C) 2019, DevSpace19 Development Team.