import mongoose from 'mongoose';

const historialModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    diagnosis: {
        type:String,
        required: true
    }
})

const HistoriaClinica = mongoose.model('Historia', historialModel);
export default HistoriaClinica;