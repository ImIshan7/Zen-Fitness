import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PRICING_PLANS } from '../lib/constants';

export function PricingSection() {
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
                    <h2 className="text-3xl font-bold text-[#32CD32] md:text-4xl">
                        Choose Your Plan
                    </h2>
                    <p className="mt-4 text-[#708090]">
                        Find the perfect membership plan for your fitness journey
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {PRICING_PLANS.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`rounded-lg border bg-white p-8 shadow-lg ${
                                plan.recommended ? 'relative border-[#FFA500]' : ''
                            }`}
                        >
                            {plan.recommended && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#FFA500] px-4 py-1 text-sm font-semibold text-white">
                  Recommended
                </span>
                            )}
                            <h3 className="text-xl font-bold">{plan.name}</h3>
                            <div className="mt-4">
                                <span className="text-3xl font-bold">${plan.price}</span>
                                <span className="text-[#708090]">/month</span>
                            </div>
                            <ul className="mt-6 space-y-4">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-[#708090]">
                                        <Check className="mr-2 h-5 w-5 text-[#32CD32]" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className={`mt-8 w-full ${
                                    plan.recommended
                                        ? 'bg-[#FFA500] hover:bg-[#FF8C00]'
                                        : 'bg-[#32CD32] hover:bg-[#2FB52F]'
                                }`}
                            >
                                Get Started
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}