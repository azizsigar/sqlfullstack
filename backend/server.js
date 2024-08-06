const express = require("express");
const cors = require("cors");
const mysql = require("mysql");


const app = express();
app.use(cors());
const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"

})
app.get("/", (req, res) => {
const sql ="SELECT * FROM Student";
db.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result);
    return res.json(result);
})});

app.listen(8081, () => {
  console.log("Server listening on port 8081");
});
