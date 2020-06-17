const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    },
    amount:{
        type: Number,
        required: true
    }
});

module.exports = Expense = mongoose.model('expense', ExpenseSchema);