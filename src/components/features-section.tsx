import { motion } from 'framer-motion';
import { Dumbbell, Users, Calendar, Trophy } from 'lucide-react';

export function FeaturesSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                        Why Choose Zen Fitness?
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Experience the difference with our premium facilities and expert guidance
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-8 md:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group rounded-lg border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-4 rounded-full bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20">
                                <feature.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="font-heading text-xl font-semibold">{feature.title}</h3>
                            <p className="mt-2 text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const features = [
    {
        title: 'Modern Equipment',
        description: 'State-of-the-art machines and free weights for optimal training.',
        icon: Dumbbell,
    },
    {
        title: 'Expert Trainers',
        description: 'Certified professionals to guide your fitness journey.',
        icon: Users,
    },
    {
        title: 'Flexible Classes',
        description: 'Wide variety of classes to suit your schedule and preferences.',
        icon: Calendar,
    },
    {
        title: 'Proven Results',
        description: 'Join our community of successful fitness transformations.',
        icon: Trophy,
    },
];