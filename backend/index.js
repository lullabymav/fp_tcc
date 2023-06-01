import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "prak_tcc",
    authPlugins: {
        mysql_clear_password: () => () => Buffer.from("", "utf8")
    }
});

// db.connect((err) => {
//     if (err) {
//         console.error("Error connecting to MySQL:", err);
//         return;
//     }
//     console.log("Connected to MySQL server!");
// });
app.use(express.json()) //untuk allow any json file
app.use(cors())

app.get("/", (req, res) => {
    res.json("hello this is be");
});

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.json(err);
        }
        return res.json(data);
    });
});

app.post("/books", (req,res)=>{
    const q = "INSERT INTO books (`title`,`description`,`cover`,`price`) VALUES (?)"
    // const values = ["title from be","description from be","cover from be"]
    const values = [req.body.title, req.body.description, req.body.cover, req.body.price];


    db.query(q, [values],(err,data)=>{
        if(err) return res.json(err)
        // return res.json(data);
        return res.json("Book has been created");
    })
})

app.delete("/books/:id", (req,res)=>{
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?"

    db.query(q,[bookId],(err,data)=>{
        if(err) return res.json(err)
        // return res.json(data);
        return res.json("Book has been created");
    })
})

app.put("/books/:id", (req,res)=>{
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?,`description` = ?,`cover` = ?,`price` = ? WHERE id =?";

    const values = [req.body.title, req.body.description, req.body.cover, req.body.price];

    db.query(q,[...values,bookId],(err,data)=>{
        if(err) return res.json(err)
        // return res.json(data);
        return res.json("Book has been updated");
    })
})

app.listen(8800, () => {
    console.log("Connected to Be!");
});
