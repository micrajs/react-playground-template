const bs = require('browser-sync');
const { cwd, wait } = require('../utilities');

wait(1100).then(() =>
  bs({
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
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
  }),
);
