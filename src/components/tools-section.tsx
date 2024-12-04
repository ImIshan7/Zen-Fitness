import { motion } from 'framer-motion';
import { Calculator, Scale, Apple, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const tools = [
    {
        title: 'Calorie Calculator',
        description: 'Calculate your daily caloric needs based on your goals',
        icon: Calculator,
        link: '/tools/calorie-calculator',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
    },
    {
        title: 'BMI Calculator',
        description: 'Check your Body Mass Index and health status',
        icon: Scale,
        link: '/tools/bmi-calculator',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
    },
    {
        title: 'Macro Calculator',
        description: 'Get personalized macronutrient recommendations',
        icon: Apple,
        link: '/tools/macro-calculator',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
    },
    {
        title: 'Goal Setting',
        description: 'Plan and track your fitness journey effectively',
        icon: Target,
        link: '/tools/goal-setting',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
    }
];

export function ToolsSection() {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                        Fitness Tools
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Achieve your fitness goals with our comprehensive calculators and planners
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={tool.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={tool.image}
                                    alt={tool.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 p-6 text-white">
                                <div className="mb-3 rounded-full bg-white/10 p-2 backdrop-blur-sm">
                                    <tool.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold">{tool.title}</h3>
                                <p className="mt-2 text-sm text-gray-200">{tool.description}</p>
                                <Link
                                    to={tool.link}
                                    className="mt-4 inline-flex items-center text-sm font-medium text-white hover:text-primary"
                                >
                                    Try Now
                                    <motion.span
                                        className="ml-1"
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 4 }}
                                    >
                                        →
                                    </motion.span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}