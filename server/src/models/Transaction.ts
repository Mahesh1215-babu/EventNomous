import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ['Full Payment', 'PNPL Tranche'], required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
    trancheNumber: { type: Number },
    dueDate: { type: Date },
    completedAt: { type: Date },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Transaction', transactionSchema);
