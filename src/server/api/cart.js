const express = require('express');
const router = express.Router();

// GET /api/cart/:userId
router.get('/:userId', (req, res) => {
    // fetch the user's cart items
});

// POST /api/cart/:userId
router.post('/:userId', (req, res) => {
    // add an item to the user's cart
});

// DELETE /api/cart/:userId/:itemId
router.delete('/:userId/:itemId', (req, res) => {
    // remove an item from the user's cart
});

module.exports = router;
