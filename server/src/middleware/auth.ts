import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ message: 'Institutional access denied. No security token provided.' });

        const decodedData = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        (req as any).user = decodedData;

        next();
    } catch (error) {
        res.status(401).json({ message: 'Security token invalid or expired. Re-authentication required.' });
    }
};
