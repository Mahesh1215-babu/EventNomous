import { Request, Response } from 'express';
import Transaction from '../models/Transaction';
import Event from '../models/Event';

export const initiatePNPL = async (req: Request, res: Response) => {
    try {
        const { eventId, amount, tranches } = req.body;
        const userId = (req as any).user.id;

        const event = await Event.findById(eventId);
        if (!event) return res.status(404).json({ message: 'Event not found for PNPL allocation.' });

        const trancheAmount = amount / tranches;
        const createdTransactions = [];

        for (let i = 1; i <= tranches; i++) {
            const dueDate = new Date();
            dueDate.setMonth(dueDate.getMonth() + i);

            const transaction = await Transaction.create({
                event: eventId,
                user: userId,
                amount: trancheAmount,
                type: 'PNPL Tranche',
                trancheNumber: i,
                dueDate,
                status: 'Scheduled'
            });
            createdTransactions.push(transaction);
        }

        res.status(201).json({ message: 'Institutional PNPL facility initialized.', transactions: createdTransactions });
    } catch (error) {
        res.status(500).json({ message: 'Error initializing PNPL tranches.' });
    }
};

export const getTransactions = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id;
        const transactions = await Transaction.find({ user: userId }).populate('event');
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving financial records.' });
    }
};
