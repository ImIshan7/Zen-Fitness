import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background Image with Parallax Effect */}
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
                            'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                </div>
            </motion.div>

            {/* Animated Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 7, repeat: Infinity }}
                    className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"
                />
            </div>

            {/* Content */}
            <div className="container relative flex h-screen items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl text-white"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                            Transform Your Life with{' '}
                            <span className="text-gradient">Zen Fitness</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-300">
                            Join our premium wellness center and discover a new way of life. Expert
                            trainers, state-of-the-art equipment, and a supportive community await you.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <Button
                            size="lg"
                            className="bg-[#FFA500] text-lg hover:bg-[#FF8C00]"
                            asChild
                        >
                            <Link to="/join">
                                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="gap-2 text-lg text-white hover:bg-white/10"
                        >
                            <PlayCircle className="h-5 w-5" />
                            Watch Video
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                            >
                                <div className="text-3xl font-bold text-white">{stat.value}</div>
                                <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

const stats = [
    { value: '10K+', label: 'Active Members' },
    { value: '150+', label: 'Expert Trainers' },
    { value: '50+', label: 'Locations' },
];