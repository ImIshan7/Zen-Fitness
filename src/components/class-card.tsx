import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import { Button } from '../components/ui/button';

interface ClassCardProps {
    name: string;
    instructor: string;
    time: string;
    duration: string;
    level: string;
    image: string;
    index: number;
}

export function ClassCard({
                              name,
                              instructor,
                              time,
                              duration,
                              level,
                              image,
                              index,
                          }: ClassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
        >
            <div className="aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold">{name}</h3>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{instructor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{time} • {duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{level}</span>
                    </div>
                </div>
                <Button className="mt-6 w-full bg-primary hover:bg-primary/90">
                    Book Class
                </Button>
            </div>
        </motion.div>
    );
}