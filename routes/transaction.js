const express = require('express');
const router = express.Router();


// @route   GET /transaction
// @desc    Get Transaction
// @access  Private
router.get('/' , (req , res) => {
    res.status(200).json({
        message : "Private - Transaction Loaded"
    })
})


// @route   POST /transaction
// @desc    Add Transaction
// @access  Private
router.post('/' , (req , res) => {
    res.status(200).json({
        message : "Private - Transaction Added"
    })
})

// @route   PUT /transaction
// @desc    Update Transaction
// @access  Private
router.put('/:id' , (req , res) => {
    res.status(200).json({
        message : `Private - Transaction Updated`
    })
})


// @route   DELETE /transaction
// @desc    Delete Transaction
// @access  Private
router.delete('/:id' , (req , res) => {
    res.status(200).json({
        message : "Private - Transaction Deleted"
    })
})


module.exports = router;