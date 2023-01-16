const express = require("express");
const router = express.Router();
const authToken = require("../middleware/authToken");
const Transaction = require("../models/Transaction");

// @route   GET /transaction
// @desc    Get Transaction
// @access  Private
router.get("/", authToken, async (req, res) => {
  try {
    const contacts = await Transaction.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST /transaction
// @desc    Add Transaction
// @access  Private
router.post("/", (req, res) => {
  res.status(200).json({
    message: "Private - Transaction Added",
  });
});

// @route   PUT /transaction
// @desc    Update Transaction
// @access  Private
router.put("/:id", (req, res) => {
  res.status(200).json({
    message: `Private - Transaction Updated`,
  });
});

// @route   DELETE /transaction
// @desc    Delete Transaction
// @access  Private
router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: "Private - Transaction Deleted",
  });
});

module.exports = router;
