const bs = require('browser-sync');
const { cwd, wait } = require('../utilities');

wait(1100).then(() => bs({
  files: [
    {
      match: [cwd('.micra/**/*.js')],
      fn: bs.reload,
    },
  ],
  proxy: {
    target: 'localhost:1234',
    ws: true,
  },
}));
