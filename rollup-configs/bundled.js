import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.prod.ts',
  output: [
    {
      file: '@bundled/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
      resolveOnly: [/^(?!react$)/, /^(?!react-dom$)/],
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(),
  ],
}
