const express = require('express');
const router = express.Router();

//Item model
const Item = require('../../models/Item');


// @route GET api/items
// @desc Get all items
// @access Public

router.get('/', (req, res) => {
    Item.find().sort({ date: -1 }).then((items) => {
        res.json(items);
    })
});

// @route POST api/items
// @desc create a items
// @access Public

router.post('/', (req, res) => {
    const newItem = new Item({ name: req.body.name });

    newItem.save().then(item => {
        console.log('Saved item' , item);
        res.json(item);
    }).catch(err => {
        console.log('Error saving record ' , err);
    })
});

module.exports = router;