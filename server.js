const express = require('express')
const app = express();
const dotenv = require('dotenv')
const connectDB = require('./db/db')
const PORT = process.env.PORT || 5000;


// Connect Database
connectDB();

// Init Middleware
app.use(express.json({extended : false}))
dotenv.config();

app.get('/' , (req , res) => {
    res.status(200).json({
        message : "Welcome to Backend of Expense Tracker."
    })
});

// Routes
app.use('/user', require('./routes/user'));
app.use('/auth', require('./routes/auth'));
app.use('/transaction', require('./routes/transaction'))

app.listen(PORT , () => {
    console.log(`Server has started at http://localhost:${PORT}`);
})