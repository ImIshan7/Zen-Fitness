import { motion } from 'framer-motion';
import { HeroSection } from '../components/hero-section';
import { FeaturesSection } from '../components/features-section';
import { GallerySection } from '../components/gallery-section';
import { ToolsSection } from '../components/tools-section';
import { PricingSection } from '../components/pricing-section';
import { TestimonialsSection } from '../components/testimonials-section';
import { BlogSection } from '../components/blog-section';
import { PromotionSection } from '../components/promotion-section';
import { FaqSection } from '../components/faq-section';

export function HomePage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex min-h-screen flex-col"
        >
            <HeroSection />
            <FeaturesSection />
            <GallerySection />
            <ToolsSection />
            <PromotionSection />
            <PricingSection />
            <TestimonialsSection />
            <BlogSection />
            <FaqSection />
        </motion.div>
    );
}