# primo plugin development environment
this repository provides a starter development environment for primo customization plugins. it is intended as a lightweight alternative to [primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv).

the environment is structured to support writing plugins in modern (es6+) javascript and compiling them to a single es5-compatible javascript file using [webpack](https://webpack.js.org/). this file can be distributed as-is or uploaded as an npm package. it should ultimately be added to the `custom.js` file in a primo-explore view package.

**see the [wiki for this repository](https://github.com/alliance-pcsg/primo-plugin-devenv/wiki) for instructions on plugin development.**
