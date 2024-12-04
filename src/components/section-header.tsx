import { motion } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${centered ? 'text-center' : ''}`}
        >
            <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
            {subtitle && (
                <p className="mt-4 text-muted-foreground">{subtitle}</p>
            )}
        </motion.div>
    );
}