import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { ScheduleHero } from '../components/schedule-hero';
import { ScheduleFilters } from '../components/schedule-filters';
import { ClassCard } from '../components/class-card';

const classes = [
    {
        id: 1,
        name: 'Morning Yoga Flow',
        instructor: 'Sarah Chen',
        time: '7:00 AM',
        duration: '60 min',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
        id: 2,
        name: 'HIIT Cardio Blast',
        instructor: 'Mike Johnson',
        time: '8:30 AM',
        duration: '45 min',
        level: 'Intermediate',
        image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
        id: 3,
        name: 'Power Strength',
        instructor: 'Emma Rodriguez',
        time: '10:00 AM',
        duration: '75 min',
        level: 'Advanced',
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
        id: 4,
        name: 'Core & Flexibility',
        instructor: 'David Kim',
        time: '12:00 PM',
        duration: '60 min',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
        id: 5,
        name: 'Evening Pilates',
        instructor: 'Lisa Wang',
        time: '5:30 PM',
        duration: '60 min',
        level: 'Intermediate',
        image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
        id: 6,
        name: 'Sunset Meditation',
        instructor: 'John Davis',
        time: '7:00 PM',
        duration: '45 min',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
];

export function SchedulePage() {
    return (
        <div className="min-h-screen">
            <ScheduleHero />

            <div className="container py-16">
                <div className="mb-12">
                    <ScheduleFilters />
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {classes.map((classItem, index) => (
                        <ClassCard key={classItem.id} {...classItem} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 rounded-lg bg-secondary/10 p-8 text-center"
                >
                    <h3 className="text-xl font-semibold text-secondary-foreground">
                        Need a Custom Schedule?
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                        Contact our team to create a personalized training plan that fits your schedule.
                    </p>
                    <Button
                        variant="secondary"
                        className="mt-6"
                        onClick={() => window.location.href = '/contact'}
                    >
                        Contact Us
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}