const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Mongo connected');
    } catch (error) {
        console.error('Error connected Mongo: ', error.message);
    }
};
module.exports = connectDB