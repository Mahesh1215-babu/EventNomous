import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'vendor', 'organizer', 'corporate'], default: 'user' },
    companyName: { type: String },
    phone: { type: String },
    isKycVerified: { type: Boolean, default: false },
    institutionalLimit: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
