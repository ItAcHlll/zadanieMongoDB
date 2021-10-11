const express = require('express');
const bodyParser= require('body-parser')
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://itachi:kuba123@cluster0.atteh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
let quotesCollection

MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    quotesCollection = db.collection('quotes')
  })

app.listen(3000, function() {
    console.log('listening on 3000')
  })

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  })

  app.use(bodyParser.urlencoded({ extended: true }))
  app.get('/', (req, res) => {/*...*/})

  app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body)
        .then(result => {
            res.redirect('/')
            console.log(result)
        })
    console.log(req.body)
  })
  app.post('/quotes', (req, res) => {
    console.log('Dodano Studenta')
  })