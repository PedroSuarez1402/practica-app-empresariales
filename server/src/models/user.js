import mongoose from 'mongoose';

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
        
    },
    lastname: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true
    }
})
const User = mongoose.model('User', userModel);

export default User;