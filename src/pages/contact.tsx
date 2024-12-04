import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { SectionHeader } from '../components/section-header';

export function ContactPage() {
    return (
        <div className="min-h-screen space-y-16 py-16 md:space-y-24 md:py-24">
            {/* Hero Section */}
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
                        <h1 className="font-heading text-4xl font-bold md:text-5xl">Get in Touch</h1>
                        <p className="mt-4 text-lg text-gray-200">
                            We're here to answer any questions you may have
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container">
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-lg border bg-card p-6 shadow-lg backdrop-blur-sm md:p-8"
                    >
                        <h2 className="text-2xl font-bold">Send Us a Message</h2>
                        <p className="mt-2 text-muted-foreground">
                            Fill out the form below and we'll get back to you shortly
                        </p>
                        <form className="mt-6 space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="name">
                                    Full Name
                                </label>
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    className="border-gray-200 bg-white/80"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="email">
                                    Email Address
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="border-gray-200 bg-white/80"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="message">
                                    Your Message
                                </label>
                                <Textarea
                                    id="message"
                                    placeholder="How can we help you?"
                                    rows={4}
                                    className="border-gray-200 bg-white/80"
                                />
                            </div>
                            <Button className="w-full bg-primary font-semibold text-white hover:bg-primary/90">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="rounded-lg border bg-white p-6 shadow-lg backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-primary/10 p-3">
                                        <item.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <p className="mt-1 text-muted-foreground">{item.content}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Opening Hours */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="rounded-lg border bg-white p-6 shadow-lg backdrop-blur-sm"
                        >
                            <h3 className="font-semibold">Opening Hours</h3>
                            <div className="mt-4 space-y-2">
                                {openingHours.map((hours) => (
                                    <div
                                        key={hours.days}
                                        className="flex justify-between text-sm text-muted-foreground"
                                    >
                                        <span className="font-medium">{hours.days}</span>
                                        <span>{hours.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="overflow-hidden rounded-lg border bg-white shadow-lg"
                        >
                            <iframe
                                title="Gym Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25987368715491!3d40.69767006458873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564756836!5m2!1sen!2s"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

const contactInfo = [
    {
        title: 'Visit Us',
        content: '123 Fitness Street, New York, NY 10001',
        icon: MapPin,
    },
    {
        title: 'Call Us',
        content: '(555) 123-4567',
        icon: Phone,
    },
    {
        title: 'Email Us',
        content: 'info@zenfitness.com',
        icon: Mail,
    },
];

const openingHours = [
    { days: 'Monday - Friday', hours: '5:00 AM - 10:00 PM' },
    { days: 'Saturday', hours: '6:00 AM - 8:00 PM' },
    { days: 'Sunday', hours: '7:00 AM - 6:00 PM' },
];