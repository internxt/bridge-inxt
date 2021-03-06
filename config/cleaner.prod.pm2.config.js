module.exports = {
  apps: [{
    name: 'bridge-cleaner',
    script: './bin/storj-cleaner.js',
    args: '-c /root/.inxt-bridge/config/production',
    env: {
      STORJ_NETWORK: 'INXT',
      STORJ_BRIDGE: 'https://api.internxt.com',
      NODE_ENV: 'production'
    }
  }]
};