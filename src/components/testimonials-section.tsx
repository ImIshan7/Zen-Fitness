import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                        Success Stories
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Hear what our members have to say about their journey
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group rounded-lg border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="flex gap-1 text-yellow-400">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <p className="mt-4 font-medium italic text-muted-foreground">
                                "{testimonial.comment}"
                            </p>
                            <div className="mt-6 flex items-center gap-4">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <div>
                                    <p className="font-heading font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const testimonials = [
    {
        name: 'Sarah Johnson',
        title: 'Member since 2022',
        comment:
            'Joining Zen Fitness was the best decision I\'ve made. The trainers are exceptional and the community is so supportive!',
        image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    },
    {
        name: 'Michael Chen',
        title: 'Member since 2021',
        comment:
            'The facilities are top-notch and the personal training program helped me achieve results I never thought possible.',
        image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    },
    {
        name: 'Emma Rodriguez',
        title: 'Member since 2023',
        comment:
            'I love the variety of classes and the flexible schedule. It\'s made staying fit so much easier with my busy lifestyle.',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    },
];