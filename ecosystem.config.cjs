module.exports = {
  apps: [
    {
      name: "site-nice-rachat-bijoux",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3850",
      cwd: "/var/www/site-nice-rachat-bijoux",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 3850
      }
    }
  ]
};
