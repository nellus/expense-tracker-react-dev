const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const items = require('./routes/api/items');
const expenses = require('./routes/api/expenses');

//bodyParser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys.js').mongoURI;

//Connect to DB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('connected to MongoDB...');
}).catch((err) => {
  console.log('Error connecting to MongoDB => ' + err);
})


//Use Routes
app.use('/api/items', items);

app.use('/api/expenses', expenses);

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);