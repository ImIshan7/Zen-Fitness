import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface TrainerCardProps {
    name: string;
    role: string;
    image: string;
    bio: string;
    social: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
    };
}

export function TrainerCard({ name, role, image, bio, social }: TrainerCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-lg border bg-card text-card-foreground"
        >
            <div className="aspect-square overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{role}</p>
                <p className="mt-4 text-sm">{bio}</p>
                <div className="mt-4 flex space-x-4">
                    {social.facebook && (
                        <a
                            href={social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Facebook className="h-5 w-5" />
                        </a>
                    )}
                    {social.instagram && (
                        <a
                            href={social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Instagram className="h-5 w-5" />
                        </a>
                    )}
                    {social.twitter && (
                        <a
                            href={social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Twitter className="h-5 w-5" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}