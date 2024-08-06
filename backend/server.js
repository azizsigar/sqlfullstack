const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});
app.get("/", (req, res) => {
  const sql = "SELECT * FROM Student";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    return res.json(result);
  });
});
app.post("/create", (req, res) => {
  const sql = "INSERT INTO Student (`Name`, `Email`) VALUES (?)";
  const values = [req.body.name, req.body.email];
  db.query(sql, [values], (err, result) => {
    if (err) throw err;
    console.log(result);
    return res.json(result);
  });
});
app.put("/update/:id", (req, res) => {
  const sql = "update Student set Name = ?, Email = ? where Id = ?";
  const values = [req.body.name, req.body.email];
  const id = req.params.id; 
  db.query(sql, [...values,id], (err, result) => {
    if (err) throw err;
    console.log(result);
    return res.json(result);
  });
});
app.delete("/delete/:id", (req, res) => {
  const id = req.body.id;
  const sql = "DELETE FROM Student WHERE Id= (?)";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    console.log(result);
    return res.json(result);
  });
});

app.listen(8081, () => {
  console.log("Server listening on port 8081");
});
