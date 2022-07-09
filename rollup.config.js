import { defineConfig } from 'rollup'

export default defineConfig({
  input: {
    one: 'src/one.js',
    two: 'src/two.js'
  },
  output: {
    dir: 'dist',
    format: 'esm'
  },
  external: ['fs'],
  treeshake: {
    moduleSideEffects: 'no-external',
    // moduleSideEffects: true,
  }
})
