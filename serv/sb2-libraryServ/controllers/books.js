var db = require('../db.js');

module.exports.getAllBooks = function(callback) {
  var query = "SELECT * FROM `books`";
  db.query(query, function(err, rows) {
    if (err) return callback({success: false, message: "Error getting all books.", data: []});
    return callback({success: true, message: "Successfully fetched all books.", data: rows});
  });
};

module.exports.getBookById = function(id, callback) {
  var query = "SELECT * FROM `books` WHERE `id`=" + id;
  db.query(query, function(err, rows) {
    if (err) return callback({success: false, message: "Error getting book.", data: []});
    return callback({success: true, message: "Successfully fetched all book.", data: rows[0]});
  });
};

module.exports.addBook = function(isbn, title, author_id, publisher_id, price, pages, genre, barcode, callback) {
  var sql = 'INSERT INTO loans (isbn, title, author_id, publisher_id, price, pages, genre, barcode) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
  db.query(sql, isbn, title, author_id, publisher_id, price, pages, genre, barcode, function(err, rows) {
    if (err) {
      console.log("Error while inserting book:", err);
      callback({success: false, message: "Error while inserting book.", data: []});
    } else {
      callback({success: true, message: "Successfully inserted book.", data: rows[0]});
    };
  });
};
