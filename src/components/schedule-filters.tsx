import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

const filters = ['All Classes', 'Yoga', 'HIIT', 'Strength', 'Cardio', 'Pilates'];

export function ScheduleFilters() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2"
        >
            {filters.map((filter, index) => (
                <motion.div
                    key={filter}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    <Button
                        variant={index === 0 ? 'default' : 'outline'}
                        className="rounded-full"
                    >
                        {filter}
                    </Button>
                </motion.div>
            ))}
        </motion.div>
    );
}