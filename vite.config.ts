import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/__tests__/setup.ts'],
  },
  // esbuild: {
  //   loader: 'jsx',
  //   include: /(src)\/.*\.jsx?$/,
  //   exclude: [],
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     loader: { '.js': 'jsx' },
  //     plugins: [
  //       {
  //         name: 'load-js-files-as-jsx',
  //         setup(build) {
  //           build.onLoad(
  //             { filter: /(src)\/.*\.js$/ },
  //             async (args) => ({
  //               loader: 'jsx',
  //               contents: await fs.readFile(args.path, 'utf8'),
  //             })
  //           );
  //         },
  //       },
  //     ],
  //   },
  // }
})
