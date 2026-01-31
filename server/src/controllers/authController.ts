import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export const signup = async (req: Request, res: Response) => {
    try {
        const { fullName, email, password, role } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'Executive profile already exists.' });

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            fullName,
            email,
            password: hashedPassword,
            role
        });

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '24h' }
        );

        res.status(201).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error during profile initialization.' });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'Institutional profile not found.' });

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials. Strategic lockout imminent.' });

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '24h' }
        );

        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error during authentication.' });
    }
};
