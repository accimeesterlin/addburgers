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
  },
  // updateOne()
  update: function(tableInput, condition, cb){
    connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', function(err,result){
      if (err) throw err;
      cb(result);
    })
  },
  // insertOne()
  create: function(tableInput,val,cb){
    connection.query('INSERT INTO '+tableInput+" (burger_name)VALUES ('"+val+"');", function(err,result){
      if (err) throw err;
      cb(result);
    })
  }
}
//

// Export the orm object for the model (burger.js).
module.exports = orm;
