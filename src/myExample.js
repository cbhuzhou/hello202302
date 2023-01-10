import json from '@rollup/plugin-json'
import { dataToEsm } from '@rollup/pluginutils'

function myExample () {
  return {
    name: 'my-example',
    buildStart (options) {
      console.log('in options', options)
    },
    load (id) {
      console.log('in load', id)
      return null
    },
    transform (code, id) {
      if (id.slice(-5) !== '.json') return null
      try {
        const parsed = JSON.parse(code)
        const transformCode = dataToEsm(parsed)
        console.log(transformCode)
        return {
          code: transformCode
        }
      } catch (err) {

      }
    }
  }
}

export default {
  input: 'main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  },
  plugins: [myExample()]
}
