import { Request, Response } from 'express';
import Event from '../models/Event';

export const createEvent = async (req: Request, res: Response) => {
    try {
        const { title, description, date, location, budget } = req.body;
        const organizer = (req as any).user.id;

        const event = await Event.create({
            title,
            description,
            date,
            location,
            organizer,
            budget
        });

        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error initiating institutional project.' });
    }
};

export const getEvents = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id;
        const events = await Event.find({ organizer: userId });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving institutional portfolio.' });
    }
};
