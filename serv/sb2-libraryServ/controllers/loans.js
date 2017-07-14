var db = require('../db.js');

module.exports.getAllLoans = function(callback) {
  var query = "SELECT * FROM `loans`";
  db.query(query, function(err, rows) {
    if (err) return callback({success: false, message: "Error getting all loans.", data: []});
    return callback({success: true, message: "Successfully fetched all loans.", data: rows});
  });
};

module.exports.getLoanById = function(id, callback) {
  var query = "SELECT * FROM `loans` WHERE `id`=" + id;
  db.query(query, function(err, rows) {
    if (err) return callback({success: false, message: "Error getting loan.", data: []});
    return callback({success: true, message: "Successfully fetched all loan.", data: rows[0]});
  });
};

module.exports.addLoan = function(barcode, user_id, dateIssued, dateReturn, callback) {
  var sql = 'INSERT INTO loans (barcode, user_id, dateIssued, dateReturn) VALUES (?, ?, ?, ?)'
  db.query(sql, barcode, user_id, dateIssued, dateReturn, function(err, rows) {
    if (err) {
      console.log("Error while inserting loan:", err);
      callback({success: false, message: "Error while inserting loan.", data: []});
    } else {
      callback({success: true, message: "Successfully inserted loans.", data: rows[0]});
    };
  });
};
