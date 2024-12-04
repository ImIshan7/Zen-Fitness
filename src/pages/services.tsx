import { motion } from 'framer-motion';
import { SectionHeader } from '../components/section-header';
import { Button } from '../components/ui/button';
import { Dumbbell, Users, Heart, Brain, ArrowRight } from 'lucide-react';

export function ServicesPage() {
    return (
        <div className="min-h-screen space-y-16 py-16 md:space-y-24 md:py-24">
            {/* Hero Section */}
            <section className="relative h-[50vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="container relative flex h-full items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white"
                    >
                        <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
                            Our Services
                        </h1>
                        <p className="mt-6 text-lg text-gray-200">
                            Comprehensive fitness solutions tailored to your needs
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container">
                {/* Main Services */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <div className="mb-4 inline-block rounded-full bg-primary/10 p-3">
                                    <service.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-heading text-xl font-semibold">{service.name}</h3>
                                <p className="mt-2 text-muted-foreground">{service.description}</p>
                                <Button
                                    variant="link"
                                    className="mt-4 p-0 font-semibold text-primary hover:text-primary/80"
                                >
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Specialized Programs */}
                <div className="mt-24">
                    <SectionHeader
                        title="Specialized Programs"
                        subtitle="Take your fitness journey to the next level"
                        centered
                    />

                    <div className="mt-12 grid gap-8 md:grid-cols-2">
                        {programs.map((program, index) => (
                            <motion.div
                                key={program.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="rounded-lg border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
                            >
                                <h3 className="font-heading text-xl font-semibold">{program.name}</h3>
                                <p className="mt-2 text-muted-foreground">{program.description}</p>
                                <ul className="mt-6 space-y-3">
                                    {program.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-sm">
                                            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="mt-6 w-full">Get Started</Button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-24 rounded-lg bg-primary/10 p-12 text-center"
                >
                    <h2 className="font-heading text-3xl font-bold text-primary">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Join our community and transform your life with our expert guidance
                    </p>
                    <Button size="lg" className="mt-8">
                        Join Now
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}

const services = [
    {
        name: 'Personal Training',
        description:
            'One-on-one sessions with certified trainers tailored to your goals.',
        image:
            'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        icon: Users,
    },
    {
        name: 'Group Fitness',
        description: 'Energetic classes led by expert instructors in various disciplines.',
        image:
            'https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        icon: Heart,
    },
    {
        name: 'Strength Training',
        description: 'Build muscle and increase strength with our comprehensive programs.',
        image:
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        icon: Dumbbell,
    },
    {
        name: 'Mindfulness & Yoga',
        description: 'Find balance with our mindfulness and yoga sessions.',
        image:
            'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        icon: Brain,
    },
];

const programs = [
    {
        name: 'Weight Loss Program',
        description:
            'A comprehensive program designed to help you achieve your weight loss goals sustainably.',
        features: [
            'Personalized nutrition plan',
            'Weekly progress tracking',
            'Group support sessions',
            'Access to all gym facilities',
        ],
    },
    {
        name: 'Athletic Performance',
        description: 'Enhanced training for athletes looking to improve their performance.',
        features: [
            'Sport-specific training',
            'Performance testing',
            'Recovery sessions',
            'Nutrition optimization',
        ],
    },
];