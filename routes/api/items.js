
const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET     api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
            .sort({date: -1})
            .then(items => res.json(items));
})

// @route       POST    all/items
// @desc        Add Post
// @access     Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
                    .then(item => res.json(item));
})

// @route       DELETE    all/items
// @desc        Delete Post
// @access     Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
            .then(item => item.remove().then(() => {
                console.log({success: true})
            }))
            .catch(err => res.status(404).json({success: false}));
});

module.exports = router;