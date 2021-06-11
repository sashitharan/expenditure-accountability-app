const Transaction = require('../models/Transaction');

//@desc Get all Transactions
//@route GET /api/v1/transactions
//@access Public

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.send(500).json({
      sucess: false,
      error: 'Server Error',
    });
  }
};

//@desc Add Transactions
//@route POST /api/v1/transactions
//@access Public

exports.addTransactions = async (req, res, next) => {
  // res.send('POST Transactions');

  try {
    const {text, amount} = req.body;
    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Error!',
      });
    }
  }
};

//@desc Delete Transactions
//@route DELETE /api/v1/transactions/:id
//@access Public

exports.deleteTransactions = async (req, res, next) => {
  res.send('Delete Transactions');
};
