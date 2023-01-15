const express = require('express');
const router = express.Router();

// @route   POST /auth
// @desc    User Authenticated
// @access  Public
router.post('/' , (req , res) => {
    res.status(200).json({
        message : "Public - User Authenticated"
    })
})

module.exports = router;