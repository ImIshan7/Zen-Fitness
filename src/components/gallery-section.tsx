import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

export function GallerySection() {
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
                    <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                        Our Facility
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Take a tour of our state-of-the-art gym
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-4 md:grid-cols-4 md:grid-rows-2">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.url}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative overflow-hidden rounded-lg ${
                                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                            }`}
                        >
                            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <Button variant="secondary" size="lg" className="font-semibold">
                                    View Gallery
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const galleryImages = [
    {
        url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        alt: 'Main Gym Area',
    },
    {
        url: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        alt: 'Group Class',
    },
    {
        url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        alt: 'Cardio Area',
    },
    {
        url: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        alt: 'Weight Training',
    },
    {
        url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        alt: 'Yoga Studio',
    },
];