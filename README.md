1. In `src/shared.js`, it imports `fs` (externalized) and will be a shared chunk for `src/one.js` and `src/two.js`.
2. Notice that `dist/one.js` and `dist/two.js` would both `import 'fs'` as if `fs` is side-effectful.
3. Setting `treeshake.moduleSideEffects: false` has no effect, nor using a plugin to set `moduleSideEffects: false` and external.
