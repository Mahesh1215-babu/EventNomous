// Core Type Definitions for EventNomous Platform

export type UserRole = 'user' | 'vendor' | 'organizer' | 'corporate';

export type EventCategory =
    | 'marriage'
    | 'sangeeth'
    | 'haldi'
    | 'mehendi'
    | 'reception'
    | 'engagement'
    | 'carnival'
    | 'corporate'
    | 'concert';

export type PaymentStatus = 'pending' | 'completed' | 'scheduled' | 'failed';
export type PaymentMethod = 'pnpl' | 'card' | 'upi' | 'bank_transfer';

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: UserRole;
    avatar?: string;
    createdAt: Date;
    kycStatus?: 'pending' | 'verified' | 'rejected';
}

export interface Event {
    id: string;
    title: string;
    category: EventCategory;
    date: Date;
    location: string;
    estimatedBudget: number;
    actualSpent: number;
    guestCount: number;
    status: 'planning' | 'confirmed' | 'ongoing' | 'completed' | 'cancelled';
    userId: string;
    vendors: string[]; // vendor IDs
    createdAt: Date;
    updatedAt: Date;
    description?: string;
    venue?: string;
    imageUrl?: string;
}

export interface Vendor {
    id: string;
    name: string;
    category: string;
    rating: number;
    reviewCount: number;
    location: string;
    priceRange: 'budget' | 'premium' | 'elite' | 'institutional';
    services: string[];
    description: string;
    imageUrl: string;
    portfolio: string[];
    verified: boolean;
    responseTime: string;
    completedEvents: number;
}

export interface VendorReview {
    id: string;
    vendorId: string;
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    eventType: string;
    createdAt: Date;
    helpful: number;
}

export interface Payment {
    id: string;
    eventId: string;
    vendorId: string;
    vendorName: string;
    amount: number;
    status: PaymentStatus;
    method?: PaymentMethod;
    dueDate?: Date;
    paidDate?: Date;
    description: string;
    splitType?: 'full' | 'partial';
    installments?: number;
    currentInstallment?: number;
}

export interface Notification {
    id: string;
    userId: string;
    type: 'event' | 'payment' | 'vendor' | 'system' | 'ai';
    title: string;
    message: string;
    read: boolean;
    createdAt: Date;
    actionUrl?: string;
    priority: 'low' | 'medium' | 'high';
}

export interface Message {
    id: string;
    conversationId: string;
    senderId: string;
    senderName: string;
    senderAvatar?: string;
    content: string;
    timestamp: Date;
    read: boolean;
}

export interface Conversation {
    id: string;
    participants: string[];
    participantNames: string[];
    lastMessage: string;
    lastMessageTime: Date;
    unreadCount: number;
}

export interface BudgetReport {
    eventId: string;
    eventName: string;
    totalBudget: number;
    spent: number;
    remaining: number;
    categories: {
        name: string;
        allocated: number;
        spent: number;
    }[];
}

export interface SpendingAnalytics {
    period: string;
    totalSpent: number;
    transactions: number;
    averageTransaction: number;
    topCategories: {
        name: string;
        amount: number;
        percentage: number;
    }[];
    monthlyTrend: {
        month: string;
        amount: number;
    }[];
}

export interface AIMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

export interface AIRecommendation {
    id: string;
    type: 'vendor' | 'budget' | 'timeline' | 'general';
    title: string;
    description: string;
    confidence: number;
    actionable: boolean;
    actionUrl?: string;
}

export interface Booking {
    id: string;
    eventId: string;
    vendorId: string;
    vendorName: string;
    serviceType: string;
    date: Date;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    amount: number;
    notes?: string;
}

export interface FAQ {
    id: string;
    category: string;
    question: string;
    answer: string;
    helpful: number;
}

export interface SupportTicket {
    id: string;
    userId: string;
    subject: string;
    description: string;
    status: 'open' | 'in_progress' | 'resolved' | 'closed';
    priority: 'low' | 'medium' | 'high' | 'urgent';
    createdAt: Date;
    updatedAt: Date;
    responses: {
        id: string;
        from: 'user' | 'support';
        message: string;
        timestamp: Date;
    }[];
}

export interface DashboardStats {
    totalEvents: number;
    activeEvents: number;
    totalSpent: number;
    pendingPayments: number;
    upcomingEvents: number;
    totalVendors: number;
}
