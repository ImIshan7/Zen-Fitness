import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '../components/ui/navigation-menu';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <Dumbbell className="h-6 w-6" />
                    <span className="font-bold">Zen Power</span>
                </Link>

                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="hidden md:flex">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link to="/" className={navigationMenuTriggerStyle()}>
                                        Home
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link to="/about" className={navigationMenuTriggerStyle()}>
                                        About
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link to="/services" className={navigationMenuTriggerStyle()}>
                                        Services
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link to="/schedule" className={navigationMenuTriggerStyle()}>
                                        Schedule
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link to="/contact" className={navigationMenuTriggerStyle()}>
                                        Contact
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    <Button asChild className="hidden md:inline-flex">
                        <Link to="/join">Join Now</Link>
                    </Button>

                    <Button
                        variant="ghost"
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="container md:hidden">
                    <nav className="flex flex-col space-y-4 pb-4">
                        <Link
                            to="/"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/services"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            to="/schedule"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            Schedule
                        </Link>
                        <Link
                            to="/contact"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <Button asChild className="w-full">
                            <Link to="/join" onClick={() => setIsOpen(false)}>
                                Join Now
                            </Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}