import { nodeResolve } from '@rollup/plugin-node-resolve'
import { name } from '../package.json'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'

const file = type => `dist/${name}.${type}.js`
const overrides = {
  compilerOptions: { declaration: true },
  include: [
    'node_modules',
    'src/App.vue',
    'src/main.ts'
  ]
}
export { name, file }
export default {
  input: 'src/App.vue',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vue(),
    css({ output: 'bundle.css' })
  ],
  external: ['vue', 'lodash-es']
}
