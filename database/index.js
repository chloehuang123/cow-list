const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cowlist',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!');
  }
});

// Your Database Queries Here!!
let queries = {
  get: function (callback) {
    connection.query('SELECT * FROM cows', (err, results) => {
      if (err) return console.error(err.message);
      callback(results);
    });
  },

  add: function (req, callback) {
    // console.log('connect.query req: ', req)
    connection.query(
      `INSERT INTO cows (name, description) VALUES ('${req.name}', '${req.description}')`,
      (err, results) => {
        if (err) return console.log('error happened at query add: ', err);
        callback(results);
      }
    );
  },

  delete: function (callback) {
    connection.query(
      `DELETE FROM cows WHERE name = ${req.body.name}`,
      (err, results) => {
        if (err) return console.error(err.message);
        callback(results);
      }
    );
  }
};

// Don't forget to export your functions!
module.exports = {
  connection,
  queries,
};
