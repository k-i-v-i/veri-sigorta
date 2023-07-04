const express = require("express");
const dbConnect = require("./db/dbConnect");
dbConnect();

const mongoose = require("mongoose");
const Client = require("./db/clientModel");
const port = 3000;
const app = express();
// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/teklifal", (req, res) => {
    const client = new Client({
        email: req.body.email,
        name: req.body.name,
        surname: req.body.surname,
        license_plate: req.body.license_plate,
        doc_serial_number: req.body.doc_serial_number,
        date_of_birth: req.body.date_of_birth,
    });
    client.save().then((result) => {res.status(201).send({
        message: "User Created Successfully",
        result,
      });
    })
    .catch((error) => {
        res.status(500).send({
            message: "Error creating user",
            error,
        });
    })
})

app.listen(port, () => {
    console.log('The application started successfully on port ${port}');
});