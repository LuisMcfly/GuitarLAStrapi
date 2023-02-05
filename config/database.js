module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfakpqpgp3jsh6fkm72g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_ospn'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '7OoHDigPtXv31naoRouQ9627fPWUXDcR'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
