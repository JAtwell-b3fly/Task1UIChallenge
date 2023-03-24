const express = require('express');
const router = express.Router();

// GET /api/users
router.get('/', (req, res) => {
    // fetch all users
});

// POST /api/users
router.post('/', (req, res) => {
    // create a new user
});

// PUT /api/users/:id
router.put('/:id', (req, res) => {
    // update an existing user by ID
});

module.exports = router;
