import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export function PromotionSection() {
    return (
        <section className="relative overflow-hidden py-16 md:py-24">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container relative">
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-white"
                    >
                        <h2 className="font-heading text-3xl font-bold md:text-4xl">
                            Special Summer Offer
                        </h2>
                        <p className="mt-4 text-lg text-gray-200">
                            Join now and get 2 months free with our annual membership plan. Plus, receive
                            a complimentary fitness assessment and personalized workout plan.
                        </p>
                        <ul className="mt-6 space-y-3 text-gray-200">
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={benefit}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-2"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                                    {benefit}
                                </motion.li>
                            ))}
                        </ul>
                        <Button
                            size="lg"
                            className="mt-8 bg-secondary font-semibold text-white hover:bg-secondary/90"
                        >
                            Claim Offer <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="rounded-lg bg-white/10 p-8 backdrop-blur-sm"
                    >
                        <div className="text-center text-white">
                            <p className="text-lg font-semibold uppercase tracking-wider text-secondary">
                                Limited Time Offer
                            </p>
                            <div className="mt-4">
                                <span className="text-6xl font-bold">50%</span>
                                <span className="text-2xl font-semibold">OFF</span>
                            </div>
                            <p className="mt-2 text-gray-200">First Month Membership</p>
                            <p className="mt-4 text-sm text-gray-300">
                                *Terms and conditions apply. Offer valid until August 31st, 2024.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const benefits = [
    'No enrollment fee',
    'Free fitness assessment ($150 value)',
    'Personalized workout plan',
    'Access to all group classes',
    'Free protein shake per visit',
];