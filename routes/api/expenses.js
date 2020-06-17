const express = require('express');
const router = express.Router();

//Expense model
const Expense = require('../../models/Expense');

// @GET returns all expenses 
router.get('/', (req,res) => {
    Expense.find().then(expenses => {
        res.json(expenses);
    })
});

router.post('/', (req, res) => {
    var exp = new Expense({ name: req.body.name, amount: req.body.amount });

    exp.save().then(savedExpense => {
        console.log('Expense created correctly');
        res.json(savedExpense);
    }).catch(err => {
        console.log('Error saving expenses ' , err.message);
        res.json(err.message);
    });
});

module.exports = router;