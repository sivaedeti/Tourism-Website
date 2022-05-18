const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const path = require('path')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
const customer = require('./routes/Customer.js')
mongoose.connect('mongodb://localhost/wp_project')
    .then(() => {
        console.log("Database Connected Successfully");
    })
    .catch(() => {
        console.log("Failed");
    })


app.set('view engine', 'hbs');
const path_set = path.join(__dirname, '/public');
app.use(express.static(path_set));

app.get("/", (req, res) => {
    res.render("Home2.hbs");
})
app.get("/Entertainment", (req, res) => {
    res.render("Entertainment.hbs")
})
app.get("/Packages", (req, res) => {
    res.render("Packages.hbs")
})
app.get("/Religious", (req, res) => {
    res.render("Religious_sites.hbs")
})
app.get("/beaches", (req, res) => {
    res.render("Beaches1.hbs")
})
app.get("/contact_us", (req, res) => {
    res.render("contact_us.hbs")
})
app.get("/About", (req, res) => {
    res.render("about_us.hbs")
})
app.get("/signup", (req, res) => {
    res.render("signup.hbs")
})
app.get("/login", (req, res) => {
    res.render("login_page.hbs")
})

app.get("/Accomodation", (req, res) => {
    res.render("Accomodation.hbs")
})

hbs.registerPartials(__dirname + '/views', '{{nav}}')
app.listen("3001", () => {
    console.log("Server running on 3001");
})
app.use(express.json());
app.use("/", customer);