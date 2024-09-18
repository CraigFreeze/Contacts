const express = require('express');
const app = express();

const mongodb = require('./data/database.js');
const port = 3000;

// Routes
// app.use('/', require('./routes/index.js'));

// app.get('/', (req, res)=>{ res.send("hello")});
app.use('/', require('./routes/index.js'));


// Server Start
mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(process.env.port || port);
      console.log(`Connected to DB and listening on ${process.env.port || 3000}`);
    }
  });