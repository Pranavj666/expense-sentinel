import { Expense } from '../types/expense';

export const mockExpenses: Expense[] = [
    {
        id: '1',
        description: 'Flight to Mumbai',
        amount: 15000,
        category: 'Travel',
        date: '2026-02-08',
    },
    {
        id: '2',
        description: 'Hotel accommodation',
        amount: 8500,
        category: 'Accommodation',
        date: '2026-02-07',
    },
    {
        id: '3',
        description: 'Client dinner meeting',
        amount: 4200,
        category: 'Meals',
        date: '2026-02-06',
    },
    {
        id: '4',
        description: 'Conference registration',
        amount: 12000,
        category: 'Training',
        date: '2026-02-05',
    },
    {
        id: '5',
        description: 'Office supplies',
        amount: 2300,
        category: 'Supplies',
        date: '2026-02-04',
    },
    {
        id: '6',
        description: 'Taxi/Travel',
        amount: 1500,
        category: 'Travel',
        date: '2026-02-03',
    },
];
