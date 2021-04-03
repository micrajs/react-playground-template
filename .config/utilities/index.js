const { join } = require('path');
const dotenv = require('dotenv-flow');

const ENV = Object.entries(dotenv.config()).reduce(
  (env, [key, value]) => {
    env[`process.env.${key}`] = JSON.stringify(value);
    return env;
  },
  {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
);

const cwd = (...path) => join(process.cwd(), ...path);

const config = (...path) => cwd('.config', ...path);

const wait = (time) => new Promise((r) => setTimeout(r, time));

module.exports = { ENV, cwd, config, wait };
