import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';
import { ServicesPage } from './pages/services';
import { SchedulePage } from './pages/schedule';
import { ContactPage } from './pages/contact';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    );
}