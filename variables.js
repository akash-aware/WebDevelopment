const mysql=require("mysql")

var con = mysql.createConnection({

    host: "localhost",
  
    user: "root",
  
    password: "root1234",
  
    database: "mydb",
  
  });
  var s_balance
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    var sql1 = "SELECT Balance FROM bank_details where Name='Akash Aware'";
    con.query(sql1, function (err, result,fields) {
      if (err) throw err;
      s_balance=result[0].Balance 
      console.log(s_balance)
    });
    con.end()
    setTimeout(()=>{
        console.log(s_balance)
    },300)
})  


