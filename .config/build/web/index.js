const { build } = require('esbuild');
const { copyFileSync } = require('fs');
const { ENV, cwd } = require('../../utilities');

module.exports.buildWeb = () =>
  build({
    bundle: true,
    define: { ...ENV },
    entryPoints: [cwd('src/index.tsx')],
    outfile: cwd('.micra/client/app.js'),
    target: ['es6'],
    tsconfig: cwd('tsconfig.json'),
  }).then(() => {
    copyFileSync(cwd('public/index.html'), cwd('.micra/index.html'));
  });
