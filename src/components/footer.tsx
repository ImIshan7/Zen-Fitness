import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export function Footer() {
    return (
        <footer className="border-t bg-gray-50">
            {/* Newsletter Section */}
            <div className="border-b bg-primary/5 py-12">
                <div className="container">
                    <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                        <div className="max-w-md">
                            <h3 className="text-2xl font-bold text-primary">Join Our Newsletter</h3>
                            <p className="mt-2 text-muted-foreground">
                                Get fitness tips, workout updates, and exclusive offers directly to your inbox
                            </p>
                        </div>
                        <div className="flex w-full max-w-md gap-2">
                            <Input placeholder="Enter your email" type="email" className="bg-white" />
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Section */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
                            <span className="text-primary">Zen</span> Fitness
                        </Link>
                        <p className="mt-4 text-muted-foreground">
                            Transform your life through fitness with our premium facilities and expert guidance.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.href}
                                        className="flex items-center text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        <ArrowRight className="mr-2 h-4 w-4" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold">Contact Info</h3>
                        <ul className="mt-4 space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <MapPin className="h-5 w-5 text-primary" />
                                <span>123 Fitness Street<br />New York, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Phone className="h-5 w-5 text-primary" />
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="h-5 w-5 text-primary" />
                                <span>info@zenfitness.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="font-semibold">Opening Hours</h3>
                        <ul className="mt-4 space-y-2">
                            {openingHours.map((hours) => (
                                <li
                                    key={hours.days}
                                    className="flex justify-between text-sm text-muted-foreground"
                                >
                                    <span>{hours.days}</span>
                                    <span>{hours.hours}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Zen Fitness. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Schedule', href: '/schedule' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
];

const openingHours = [
    { days: 'Monday - Friday', hours: '5:00 AM - 10:00 PM' },
    { days: 'Saturday', hours: '6:00 AM - 8:00 PM' },
    { days: 'Sunday', hours: '7:00 AM - 6:00 PM' },
];