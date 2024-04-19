// @ts-check

/**
 * @documentation https://pm2.keymetrics.io/docs/usage/application-declaration/
 */

const { homedir } = require('os')

function common(name) {
  /**
   * @type {import('pm2/types').StartOptions}
   */
  const config = {
    name,
    merge_logs: true,
    instances: 1,
    autorestart: false,
    log_date_format: 'HH:mm:ss',
    // import('pm2/types').StartOptions is not a perfect representation of the config file, see https://pm2.keymetrics.io/docs/usage/application-declaration/#log-files
    // furthermore, log_file should be the param to use, but in fact, it does not seem to work.
    // @ts-ignore
    out_file: `${homedir()}/.pm2/logs/${name}.log`,
    error_file: `${homedir()}/.pm2/logs/${name}.log`,
  }

  return config
}

/**
 * @type {{apps: import('pm2/types').StartOptions[]}}
 */
const config = {
  apps: [
    {
      ...common('app-a'),
      script: 'npm -w app-a run dev',
      env: {
        PORT: '3000',
      },
    },
    {
      ...common('app-b'),
      script: 'npm -w app-b run dev',
      env: {
        PORT: '3001',
      },
    },
  ],
}

module.exports = config
