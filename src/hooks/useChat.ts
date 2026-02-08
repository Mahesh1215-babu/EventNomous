import { useState, useRef, useEffect } from 'react';
import { AIMessage } from '../types/types';

const mockAIResponses = [
    "Based on your budget of ₹50L, I recommend allocating 30% to catering, 20% to photography, and 15% to venue. This distribution has shown the best results for similar events.",
    "I've found 3 highly-rated vendors in your area that match your requirements. Would you like me to show you their profiles?",
    "Your event is 38 days away. I suggest finalizing vendor bookings within the next week to avoid premium pricing surge.",
    "I can help you optimize your budget by suggesting cost-effective alternatives that maintain quality. Shall I create a detailed breakdown?",
    "Based on 500 guests, you'll need approximately 8 serving stations for efficient catering. I can connect you with vendors who specialize in large events.",
];

export const useChat = () => {
    const [messages, setMessages] = useState<AIMessage[]>([
        {
            id: '1',
            role: 'assistant',
            content: "Hello! I'm your AI Event Assistant. I can help you with vendor recommendations, budget optimization, and timeline planning. How can I assist you today?",
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage: AIMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: inputValue,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const aiResponse: AIMessage = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: mockAIResponses[Math.floor(Math.random() * mockAIResponses.length)],
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1500);
    };

    return {
        messages,
        inputValue,
        setInputValue,
        isTyping,
        handleSend,
        messagesEndRef,
        mockAIResponses
    };
};
