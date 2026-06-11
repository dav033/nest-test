module.exports = {
  apps: [
    {
      name: 'nest-app',
      script: 'dist/main.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        PORT: 4321,
      },
    },
  ],
};