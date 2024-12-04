import { motion } from 'framer-motion';

export function ScheduleHero() {
    return (
        <section className="relative h-[40vh] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
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
                    <h1 className="font-heading text-4xl font-bold md:text-5xl">Class Schedule</h1>
                    <p className="mt-4 text-lg text-gray-200">
                        Find the perfect class to match your fitness goals
                    </p>
                </motion.div>
            </div>
        </section>
    );
}