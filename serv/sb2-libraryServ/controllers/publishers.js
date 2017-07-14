var db = require('../db.js');

module.exports.getAllPublishers = function(callback) {
  var query = "SELECT * FROM `publishers`";
  db.query(query, function(err, rows) {
    if (err) return callback({success: false, message: "Error getting all publishers.", data: []});
    return callback({success: true, message: "Successfully fetched all publishers.", data: rows});
  });
};

module.exports.getPublishersById = function(id, callback) {
  var query = "SELECT * FROM `publishers` WHERE `id`=" + id;
  db.query(query, function(err, rows) {
    if (err) return callback({success: false, message: "Error getting publishers.", data: []});
    return callback({success: true, message: "Successfully fetched all publishers.", data: rows[0]});
  });
};

module.exports.addPublishers = function(name) {
  var sql = 'INSERT INTO publishers (name) VALUES (?)'
  db.query(sql, name, function(err, rows) {
    if (err) {
      console.log("Error while inserting publisher:", err);
      callback({success: false, message: "Error while inserting publisher.", data: []});
    } else {
      callback({success: true, message: "Successfully inserted publisher.", data: rows[0]});
    };
  });
};
