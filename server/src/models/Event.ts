import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    attendees: { type: Number, default: 0 },
    budget: {
        total: { type: Number, required: true },
        allocated: { type: Number, default: 0 },
        breakdown: {
            venue: Number,
            tech: Number,
            ops: Number,
            reserves: Number
        }
    },
    status: { type: String, enum: ['Planning', 'Vendor Booking', 'Active', 'Completed'], default: 'Planning' },
    vendors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Event', eventSchema);
