const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'List of users' });
});

router.post('/', (req, res) => {
  const user = req.body;
  res.status(201).json({ message: 'User created', user });
});

module.exports = router;
