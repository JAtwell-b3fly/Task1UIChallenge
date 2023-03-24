const express = require('express');
const router = express.Router();

// GET /api/products
router.get('/', (req, res) => {
    // fetch all products
});

// POST /api/products
router.post('/', (req, res) => {
    // create a new product
});

// PUT /api/products/:id
router.put('/:id', (req, res) => {
    // update an existing product by ID
});

module.exports = router;
