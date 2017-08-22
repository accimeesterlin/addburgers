var connection = require("./connection.js");
//
// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
//
//
// selectAll()
var orm = {
  all: function(tableInput, cb){
    connection.query('SELECT * FROM ' + tableInput + ';', function(err, result){
      if (err) throw err;
      cb(result);
    })
  }
}
// insertOne()
// updateOne()
//

// Export the orm object for the model (burger.js).
module.exports = orm;
