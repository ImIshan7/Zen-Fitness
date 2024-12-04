import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export function BlogSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-primary md:text-4xl">
                        Fitness Tips & Articles
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Stay informed with the latest fitness trends and health tips
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group rounded-lg border bg-white shadow-sm"
                        >
                            <div className="aspect-video overflow-hidden rounded-t-lg">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-muted-foreground">{post.date}</p>
                                <h3 className="mt-2 text-xl font-semibold">{post.title}</h3>
                                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                                <Button variant="link" className="mt-4 p-0">
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

const blogPosts = [
    {
        title: '10 Essential Tips for Building Muscle',
        excerpt: 'Learn the fundamentals of muscle building with these proven strategies.',
        date: 'February 15, 2024',
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
        title: 'The Ultimate Guide to HIIT Workouts',
        excerpt: 'Maximize your workout efficiency with high-intensity interval training.',
        date: 'February 12, 2024',
        image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
        title: 'Nutrition Tips for Peak Performance',
        excerpt: 'Fuel your workouts with the right nutrition strategies.',
        date: 'February 10, 2024',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
];