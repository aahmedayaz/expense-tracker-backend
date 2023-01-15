const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const MONGO_URI = process.env.MONGO_URI;

const connectDB = () => {
    mongoose.connect(MONGO_URI , {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }, () => {
        console.log('MongoDB is Connected.');
    })
}
module.exports = connectDB;