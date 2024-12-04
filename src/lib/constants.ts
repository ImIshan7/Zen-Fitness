export const COLORS = {
    primary: '#32CD32',
    secondary: '#FFA500',
    text: '#708090',
    white: '#FFFFFF',
    accent: '#1E90FF',
} as const;

export const BREAKPOINTS = {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
} as const;

export const CLASSES = [
    {
        id: 1,
        name: 'Yoga Flow',
        instructor: 'Sarah Chen',
        time: '7:00 AM',
        duration: '60 min',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
    },
    {
        id: 2,
        name: 'HIIT Training',
        instructor: 'Mike Johnson',
        time: '8:30 AM',
        duration: '45 min',
        level: 'Intermediate',
        image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
    },
    {
        id: 3,
        name: 'Strength & Conditioning',
        instructor: 'Emma Rodriguez',
        time: '10:00 AM',
        duration: '75 min',
        level: 'Advanced',
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
    }
] as const;

export const PRICING_PLANS = [
    {
        name: 'Basic',
        price: 49,
        features: [
            'Access to gym facilities',
            'Basic equipment usage',
            'Locker room access',
            '2 group classes per month'
        ],
        recommended: false
    },
    {
        name: 'Premium',
        price: 89,
        features: [
            'Full gym access',
            'Unlimited group classes',
            'Personal trainer consultation',
            'Access to spa facilities',
            'Nutrition planning'
        ],
        recommended: true
    },
    {
        name: 'Elite',
        price: 129,
        features: [
            'All Premium features',
            'Unlimited personal training',
            'Priority class booking',
            'Exclusive member events',
            'Meal prep service'
        ],
        recommended: false
    }
] as const;