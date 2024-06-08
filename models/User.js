const db = require('pg-promise')();
const cn = {
  host: 'localhost', // или значение из database.config.js
  port: 5432, // или значение из database.config.js
  database: 'vw_database', // или значение из database.config.js
  user: 'vw_admin', // или значение из database.config.js
  password: 'test_qwerty', // или значение из database.config.js
  max: 10, // максимальное количество подключений
  idleTimeoutMillis: 30000 // таймаут простоя в миллисекундах
};

const init = async () => {
  if (!db) db = require('./database.config.js')();
  db.connect(cn);
};

module.exports = init();