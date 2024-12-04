import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../components/ui/accordion';

const faqs = [
    {
        question: 'What are your gym hours?',
        answer: 'We are open 24/7 to accommodate all schedules. Our staffed hours are Monday to Friday 5am-11pm, and weekends 7am-9pm.',
    },
    {
        question: 'Do you offer personal training?',
        answer: 'Yes! Our certified personal trainers are available for one-on-one sessions, partner training, and small group training.',
    },
    {
        question: 'Is there a free trial available?',
        answer: 'We offer a 7-day free trial for new members to experience our facilities and classes.',
    },
    {
        question: 'What amenities are included?',
        answer: 'Members have access to our state-of-the-art equipment, group classes, locker rooms with showers, sauna, and free parking.',
    },
    {
        question: 'Can I freeze my membership?',
        answer: 'Yes, you can freeze your membership for up to 3 months per year with a valid reason.',
    },
];

export function FaqSection() {
    return (
        <section className="relative overflow-hidden bg-gray-50 py-16 md:py-24">
            {/* Decorative Elements */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-primary/5" />
                <div className="absolute -right-4 bottom-0 h-72 w-72 rounded-full bg-secondary/5" />
            </div>

            <div className="container relative">
                <div className="mx-auto max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Find answers to common questions about our facilities and services
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-12"
                    >
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={faq.question}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <AccordionItem value={`item-${index}`} className="border rounded-lg bg-white">
                                        <AccordionTrigger className="px-6 text-left">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="px-6 pb-4">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}