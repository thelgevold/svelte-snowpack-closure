module.exports = function (snowpackConfig, pluginOptions) {
  const ClosureCompiler = require('google-closure-compiler').compiler;
  const fs = require("fs");

  return {
    name: 'closure-compiler',

    async optimize() {
      const closureCompiler = new ClosureCompiler({
        js: [
          './build/_dist_/**.js',
          './build/web_modules/**.js',
          './externs.js'
        ],

        compilation_level: 'ADVANCED',
        language_in: 'ECMASCRIPT_2020',
        language_out: 'ECMASCRIPT_2015',
        module_resolution: 'node',
        jscomp_off: 'checkVars',
        rewrite_polyfills: false,
        warning_level: 'QUIET',
        process_common_js_modules: true,
        entry_point: './build/_dist_/index.js'
      });

      return new Promise((resolve, reject) => {
        closureCompiler.run((exitCode, stdOut, stdErr) => {
          if (stdErr) {
            console.error(`Exit code: ${exitCode}`, stdErr);
            reject();
          }
          else {
            fs.writeFileSync(pluginOptions.output, stdOut);
            resolve();
          }
        });
      });
    }
  };
};