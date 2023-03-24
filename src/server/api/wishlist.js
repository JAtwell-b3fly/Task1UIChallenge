const express = require('express');
const router = express.Router();

// GET /api/wishlist/:userId
router.get('/:userId', (req, res) => {
    // fetch the user's wishlist items
});

// POST /api/wishlist/:userId
router.post('/:userId', (req, res) => {
    // add an item to the user's wishlist
});

// DELETE /api/wishlist/:userId/:itemId
router.delete('/:userId/:itemId', (req, res) => {
    // remove an item from the user's wishlist
});

module.exports = router;
