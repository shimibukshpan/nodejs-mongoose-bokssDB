
const port = 4000;

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/books");
let book = require("./modules/mogoSchema");

let express = require('express');
let app = express();

app.set('view engine', 'ejs');

const path = require("path");
const publicDirectoryPath = path.join(__dirname, "./mySite");
app.use(express.static(publicDirectoryPath));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('*', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
});

app.get('', (req, res) => {
    let myData = new book(req.query);
    myData.save()
    console.log(req.query);
    res.render('index');
});


app.post('', (req, res) => {
    let myData = new book(req.body);
    myData.save()
    console.log(req.body);
    res.render('savedform');
});

app.get("/books/:number", async (req, res) => {
	try {
		const post = await book.find({ pageCount: req.params.number})
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "number doesn't exist!" })
	}
});

app.get('*', (req, res) => { 
    res.redirect(303,"/");
 })

app.listen(port, () => console.log('Example app listening on port '+ port));
