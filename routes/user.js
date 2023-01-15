const express = require('express')
const router = express.Router();


// @route   GET /user
// @desc    Get User
// @access  Private
router.get('/' , (req , res) => {
    res.status(200).json({
        message : "Private - User Loaded"
    })
})

// @route   POST /user
// @desc    Add User
// @access  Public
router.post('/' , (req , res) => {
    res.status(200).json({
        message : "Public - User Added"
    })
})


module.exports = router;