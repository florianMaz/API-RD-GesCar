const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'API-GES-Ges_car', 'models');

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/ges_car',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    }
  }
};
