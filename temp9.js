
 const mysql = require("mysql");
// Create connection

var con = mysql.createConnection({

    host: "localhost",
  
    user: "root",
  
    password: "root1234",
  
    database: "mydb",
  
  });

  var Accounts=[]
  var Names=[]
  var Balances=[]
  var Emails=[]

  // Connect to MySQL

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM bank_details";
    con.query(sql, function (err, result,fields) {
      if (err) throw err;
      console.log(result);
      for(i=0;i<result.length;i++)
      {
        Accounts[i]=result[i].Account_No;
        Names[i]=result[i].Name;
        Balances[i]=result[i].Balance;
        Emails[i]=result[i].Email;
      }
      console.log(Accounts);
    });
    
    con.end();
});


