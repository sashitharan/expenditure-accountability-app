const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require('../controllers/transactionController');

router.route('/').get(getTransactions).post(addTransactions);

router.route('/:id').delete(deleteTransactions);

// router.get('/', (req,res)=> res.send('Hello, World'));

module.exports = router;
