module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    ['./plugins/closure-compiler.js', { "output": "build/bundle.min.js" }],
    [
      '@snowpack/plugin-run-script',
      { cmd: 'svelte-check --output human', watch: '$1 --watch', output: 'stream' },
    ],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
