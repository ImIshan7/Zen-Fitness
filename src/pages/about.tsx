import { motion } from 'framer-motion';
import { Trophy, Users, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { TrainerCard } from '../components/trainer-card';

export function AboutPage() {
    return (
        <div className="space-y-16 py-16 md:space-y-24 md:py-24">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage:
                                'url(https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                    </div>
                </motion.div>

                <div className="container relative flex h-full items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl text-white"
                    >
                        <h1 className="font-heading text-5xl font-bold md:text-6xl lg:text-7xl">
                            About Zen Fitness
                        </h1>
                        <p className="mt-6 text-xl text-gray-200">
                            Since 2010, we've been dedicated to transforming lives through fitness,
                            wellness, and community.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="container">
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-4xl font-bold text-primary md:text-5xl">
                            Our Mission
                        </h2>
                        <p className="mt-6 text-xl text-muted-foreground">
                            To inspire and empower individuals to transform their lives through fitness,
                            providing them with the tools, knowledge, and support they need to succeed.
                        </p>
                        <div className="mt-8 space-y-4">
                            {missionPoints.map((point, index) => (
                                <motion.div
                                    key={point}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="rounded-full bg-primary/10 p-1">
                                        <ArrowRight className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="text-muted-foreground">{point}</span>
                                </motion.div>
                            ))}
                        </div>
                        <Button className="mt-8" size="lg">
                            Join Our Community
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative aspect-square"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"
                            alt="Gym interior"
                            className="rounded-lg object-cover shadow-2xl"
                        />
                        <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-6 shadow-xl">
                            <div className="text-4xl font-bold text-primary">12+</div>
                            <div className="mt-1 text-sm text-muted-foreground">
                                Years of Excellence
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                        Our Core Values
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        The principles that guide everything we do
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group rounded-lg border bg-card p-8 text-card-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-4 rounded-full bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20">
                                <value.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="font-heading text-xl font-semibold">{value.title}</h3>
                            <p className="mt-2 text-muted-foreground">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-gray-50 py-16">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                            Meet Our Expert Trainers
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Dedicated professionals committed to your success
                        </p>
                    </motion.div>

                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {trainers.map((trainer) => (
                            <TrainerCard key={trainer.name} {...trainer} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-primary/10 py-16"
            >
                <div className="container text-center">
                    <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                        Ready to Start Your Fitness Journey?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Join our community and transform your life with expert guidance
                    </p>
                    <Button size="lg" className="mt-8">
                        Get Started Today
                    </Button>
                </div>
            </motion.section>
        </div>
    );
}

const missionPoints = [
    'Expert guidance from certified trainers',
    'State-of-the-art facilities and equipment',
    'Supportive and inclusive community',
    'Personalized fitness programs',
    'Holistic approach to wellness',
];

const values = [
    {
        title: 'Excellence',
        description:
            'We strive for excellence in everything we do, from our facilities to our training programs.',
        icon: Trophy,
    },
    {
        title: 'Community',
        description:
            'We foster a supportive and inclusive environment where everyone feels welcome and motivated.',
        icon: Users,
    },
    {
        title: 'Innovation',
        description:
            'We continuously evolve and adapt to bring you the latest in fitness technology and methods.',
        icon: Lightbulb,
    },
];

const trainers = [
    {
        name: 'Sarah Johnson',
        role: 'Head Trainer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        bio: 'Certified personal trainer with 10+ years of experience in strength training and nutrition.',
        social: {
            facebook: 'https://facebook.com',
            instagram: 'https://instagram.com',
            twitter: 'https://twitter.com',
        },
    },
    {
        name: 'Michael Chen',
        role: 'Yoga Instructor',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        bio: 'Experienced yoga instructor specializing in vinyasa flow and meditation techniques.',
        social: {
            instagram: 'https://instagram.com',
            twitter: 'https://twitter.com',
        },
    },
    {
        name: 'Emma Rodriguez',
        role: 'HIIT Specialist',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        bio: 'High-intensity interval training expert helping clients achieve their fitness goals.',
        social: {
            facebook: 'https://facebook.com',
            instagram: 'https://instagram.com',
        },
    },
];