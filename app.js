/*Express is a fast, assertive, essential and moderate web framework of Node.js. You can assume express as a layer built on the top of the Node.js that helps manage a server and routes.
It provides a robust set of features to develop web and mobile applications.*/
const express = require('express');
const path = require('path');
const mysql = require("mysql");

/*Express requires an additional middleware module to extract incoming data of a POST
request. This middleware is called the “body-parser”.*/
const bodyParser = require('body-parser');
const { response } = require('express');



//this is the express object
const app = express()
const port = 3000
// Set EJS as templating engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname)));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/home.html'));
})


app.get('/search',(req,res)=>{
  var con = mysql.createConnection({

    host: "localhost",
  
    user: "root",
  
    password: "root1234",
  
    database: "mydb",
  
  });
  
  
  // Connect to MySQL
  var data=[]
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT Name FROM bank_details";
    con.query(sql, function (err, result,fields) {
      if (err) throw err;
      data=result;
      // console.log(data);
       res.render('search_customer',{data:data});
    });
    
    con.end();
  });
  // res.render('transfer_money');
  })

app.post('/display',(req,res)=>{
  var con = mysql.createConnection({

    host: "localhost",
  
    user: "root",
  
    password: "root1234",
  
    database: "mydb",
  
  });
  
  
  // Connect to MySQL
  var data=[]
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM bank_details WHERE Name='"+req.body.customer+"'";
    con.query(sql, function (err, result,fields) {
      if (err) throw err;
      data=result;
      // console.log(data);
       
       res.render('display',{data:data})
    });
    
    con.end();
  });
})

app.get('/new-account',(req,res)=>{
  res.sendFile(path.join(__dirname+'/add_new.html'));
})

app.post('/new-account-details',(req,res)=>{
  var con = mysql.createConnection({

    host: "localhost",
  
    user: "root",
  
    password: "root1234",
  
    database: "mydb",
  
  });
  
  
  // Connect to MySQL
  var data=[]
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql1="INSERT INTO bank_details (Name,Balance,Email) VALUES('"+req.body.name+"',"+req.body.balance+",'"
    +req.body.email+"')"
    con.query(sql1, function (err, result,fields) {
      if (err) throw err;
      data=result
      
      // console.log(data)
    });
    
    var sql2="SELECT Account_No FROM bank_details WHERE (Name='"+req.body.name+"' AND Email='"+req.body.email+"')"
    con.query(sql2,function(err,result,fields){
      if (err) throw err;
      data=result
      res.render('add_new',{data:data});
    })
    con.end();
  });
})


app.get('/view', (req, res) => {
    // The render method takes the name of the HTML
// page to be rendered as input
// This page should be in the views folder
// in the root directory.
// console.log(data)
// Create connection

var con = mysql.createConnection({

  host: "localhost",

  user: "root",

  password: "root1234",

  database: "mydb",

});


// Connect to MySQL
var data=[]
var flag=false
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM bank_details";
  con.query(sql, function (err, result,fields) {
    if (err) throw err;
    data=result
    res.render('view_all', {data:data});
    // console.log(data)
  }); 
  con.end();
});
})

app.get('/view_transcations',(req,res)=>{
  var con = mysql.createConnection({

    host: "localhost",
  
    user: "root",
  
    password: "root1234",
  
    database: "mydb",
  
  });
  // Connect to MySQL
var data=[]
var flag=false
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM transaction";
  con.query(sql, function (err, result,fields) {
    if (err) throw err;
    data=result
    res.render('view_transactions', {data:data});
    // console.log(data)
  }); 
  con.end();
});
  
})

app.get('/transfer', (req, res) => {
  // The render method takes the name of the HTML
// page to be rendered as input
// This page should be in the views folder
// in the root directory.
// Create connection

var con = mysql.createConnection({

  host: "localhost",

  user: "root",

  password: "root1234",

  database: "mydb",

});


// Connect to MySQL
var data=[]

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT Name FROM bank_details";
  con.query(sql, function (err, result,fields) {
    if (err) throw err;
    data=result;
    // console.log(data);
     res.render('transfer_money',{data:data});
  });
  
  con.end();
});
// res.render('transfer_money');
})



app.post("/no-action.js",(req,res)=>{
  // res.end(req.body.amount+" sent from "+req.body.sender+" to "+req.body.receiver)
  var con = mysql.createConnection({

    host: "localhost",
  
    user: "root",
  
    password: "root1234",
  
    database: "mydb",
  
  });

  // Connect to MySQL
var s_balance
var r_balance
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  var sql1 = "SELECT Balance FROM bank_details where Name='"+req.body.sender+"'";
  con.query(sql1, function (err, result,fields) {
    if (err) throw err;
    s_balance=result[0].Balance 
    console.log(s_balance)
  });


  var sql2 = "SELECT Balance FROM bank_details where Name='"+req.body.receiver+"'";
  con.query(sql2, function (err, result,fields) {
    if (err) throw err;
    r_balance=result[0].Balance 
    console.log(r_balance)
  });

  setTimeout(() => {
    
    
    if (s_balance>=req.body.amount)
      {
        s_balance=Number(s_balance)-Number(req.body.amount)
        r_balance=Number(r_balance)+Number(req.body.amount)
        var sql3="UPDATE bank_details SET Balance="+s_balance+" where(Name='"+req.body.sender+"')"
        con.query(sql3,function(err,result,fields){
        if (err) throw err;
      })
      var sql4="UPDATE bank_details SET Balance="+r_balance+" where(Name='"+req.body.receiver+"')"
        con.query(sql4,function(err,result,fields){
        if (err) throw err;
      })
      var sql5="INSERT INTO transaction (sender,receiver,amount,status) VALUES('"+req.body.sender+"','"+req.body.receiver
      +"',"+req.body.amount+",'True')"
      con.query(sql5,function(err,result,fields){
        if (err) throw err;
      })
      data=true
      res.render('transaction_status',{data:data});
      }
    else{
      data=false
      res.render('transaction_status',{data:data});
      var sql6="INSERT INTO transaction (sender,receiver,amount,status) VALUES('"+req.body.sender+"','"+req.body.receiver
      +"',"+req.body.amount+",'False')"
      con.query(sql6,function(err,result,fields){
        if (err) throw err;
      })
    }      
  }, 300);
  // console.log(s_balance)
  setTimeout(()=> con.end(),1000);
});
})

//this is to listen on port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })