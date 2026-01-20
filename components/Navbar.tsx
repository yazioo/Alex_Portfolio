import React, { useState, useCallback, memo } from 'react';
import { Mail, Home, Zap, User, Briefcase, Menu, X } from 'lucide-react';
import { ShimmerButton } from './ShimmerButton';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    currentView: string;
    onNavigate: (view: string) => void;
}

const GithubIcon = memo(({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432 416" fill="white" className={className}>
        <path d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z" />
    </svg>
));

GithubIcon.displayName = 'GithubIcon';

// Define other icons (InstagramIcon, LinkedInIcon, BehanceIcon) similarly...
// For brevity, I assume your previous definitions remain unchanged.

const menuItems = [
    { name: 'Home', icon: Home },
    { name: 'Skills', icon: Zap },
    { name: 'About', icon: User },
    { name: 'Works', icon: Briefcase }
] as const;

const socialLinks = [
    { icon: InstagramIcon, href: "#", label: "Instagram" },
    { icon: BehanceIcon, href: "#", label: "Behance" },
    { icon: GithubIcon, href: "https://github.com/yazioo/Alex_Portfolio/", label: "Github" },
    { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
] as const;

const LogoSVG = memo(() => (
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
    >
        {/* Your Logo paths here */}
    </svg>
));

LogoSVG.displayName = 'LogoSVG';

const Navbar: React.FC<NavbarProps> = memo(({ currentView, onNavigate }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const handleMobileMenuOpen = useCallback(() => setIsMobileMenuOpen(true), []);
    const handleMobileMenuClose = useCallback(() => setIsMobileMenuOpen(false), []);
    const handleContactToggle = useCallback(() => setIsContactOpen(prev => !prev), []);
    const handleHomeClick = useCallback(() => onNavigate('Home'), [onNavigate]);

    const handleMobileNavClick = useCallback((name: string) => {
        onNavigate(name);
        setIsMobileMenuOpen(false);
    }, [onNavigate]);

    return (
        <>
            <nav className="relative z-50 w-full max-w-[1600px] mx-auto px-4 py-3 md:px-6 md:py-6 flex justify-center items-center pointer-events-none select-none shrink-0">
                <div className="flex items-center gap-2 md:gap-4 pointer-events-auto">
                    <div className="flex items-center p-1.5 pl-3 md:pl-4 gap-3 bg-white/40 backdrop-blur-[32px] border border-white/40 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] rounded-full transition-all duration-500 hover:bg-white/50 transform-gpu ring-1 ring-black/[0.03]">
                        <div
                            className="pr-2 md:pr-3 flex items-center gap-2.5 group cursor-pointer border-r border-black/5"
                            onClick={handleHomeClick}
                        >
                            <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center transition-transform duration-500 group-hover:rotate-6">
                                <LogoSVG />
                            </div>
                            <span className="font-designer text-xl md:text-2xl tracking-tighter text-gray-900 hidden sm:block opacity-90 group-hover:opacity-100 transition-opacity">Alex</span>
                        </div>

                        <div className="hidden md:flex items-center gap-1">
                            {menuItems.map((item) => {
                                const isActive = currentView === item.name;
                                return (
                                    <button
                                        key={item.name}
                                        onClick={() => onNavigate(item.name)}
                                        className={`
                                            relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 group/item
                                            ${isActive ? 'text-blue-900' : 'text-gray-500 hover:text-gray-700'}
                                        `}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-pill"
                                                className="absolute inset-0 bg-gradient-to-b from-blue-50/90 to-blue-200/50 backdrop-blur-xl rounded-full z-0 border border-blue-200/60 shadow-[0_2px_14px_-3px_rgba(59,130,246,0.3),inset_0_1px_2px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(59,130,246,0.15)]"
                                                transition={{ type: "spring", bounce: 0.28, duration: 0.6 }}
                                            />
                                        )}
                                        <item.icon
                                            size={15}
                                            strokeWidth={isActive ? 2.5 : 2}
                                            className={`relative z-10 transition-transform duration-300 ${isActive ? "text-blue-800 scale-110 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]" : "opacity-70 group-hover/item:scale-105"}`}
                                        />
                                        <span className={`relative z-10 tracking-tight transition-colors duration-300 ${isActive ? "text-blue-950 font-bold" : ""}`}>
                                            {item.name}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            className="md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-gray-100/50 hover:bg-gray-100 transition-colors border border-black/5 text-gray-800"
                            onClick={handleMobileMenuOpen}
                        >
                            <Menu size={18} />
                        </button>
                    </div>

                    {/* Social links */}
                    <div className="relative group/contact">
                        <AnimatePresence>
                            {isContactOpen && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                                    {socialLinks.map((social, index) => {
                                        const startAngle = 160;
                                        const step = 45;
                                        const angle = startAngle - (index * step);
                                        const rad = (angle * Math.PI) / 180;
                                        const radius = 90;

                                        const finalX = Math.cos(rad) * radius;
                                        const finalY = Math.sin(rad) * radius;

                                        return (
                                            <motion.a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => {
                                                    // Prevent default only for internal placeholders
                                                    if (social.href.startsWith("#")) e.preventDefault();
                                                }}
                                                custom={index}
                                                className="absolute w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-xl border border-white/10 pointer-events-auto hover:bg-gray-900 hover:scale-110 transition-colors z-[-1]"
                                                initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                                                animate={{
                                                    x: finalX,
                                                    y: finalY,
                                                    opacity: 1,
                                                    scale: 1,
                                                    transition: { type: "spring", stiffness: 180, damping: 15, delay: index * 0.05 }
                                                }}
                                                exit={{
                                                    x: 0,
                                                    y: 0,
                                                    opacity: 0,
                                                    scale: 0.5,
                                                    transition: { duration: 0.2, delay: (socialLinks.length - 1 - index) * 0.03 }
                                                }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <div className="w-6 h-6 flex items-center justify-center">
                                                    <social.icon className="w-full h-full" />
                                                </div>
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            )}
                        </AnimatePresence>

                        <div className="relative z-20 transform transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
                            <ShimmerButton
                                onClick={handleContactToggle}
                                className="shadow-[0_20px_48px_-12px_rgba(0,0,0,0.25)] hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)] transition-shadow duration-300 h-10 md:h-11 px-5 md:px-7"
                            >
                                <span className="relative z-10 flex items-center gap-2 text-xs font-bold tracking-[0.05em] uppercase">
                                    <span className="hidden sm:inline">
                                        {isContactOpen ? 'Close' : 'Contact Me'}
                                    </span>
                                    <span className="sm:hidden">
                                        {isContactOpen ? 'Close' : 'Contact'}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isContactOpen ? 180 : 0, scale: isContactOpen ? 1.1 : 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {isContactOpen ? (
                                            <X size={14} className="text-white" />
                                        ) : (
                                            <Mail size={14} className="text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                                        )}
                                    </motion.div>
                                </span>
                            </ShimmerButton>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-white/80 flex flex-col items-center justify-center pointer-events-auto"
                    >
                        <button
                            className="absolute top-6 right-6 p-3 rounded-full bg-gray-100/50 hover:bg-gray-100 transition-colors"
                            onClick={handleMobileMenuClose}
                        >
                            <X size={24} className="text-gray-900" />
                        </button>

                        <nav className="flex flex-col gap-8 text-center">
                            {menuItems.map((item, index) => (
                                <motion.button
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    onClick={() => handleMobileNavClick(item.name)}
                                    className={`text-3xl font-display font-bold flex items-center justify-center gap-4 ${currentView === item.name ? 'text-blue-600' : 'text-gray-900'
                                        }`}
                                >
                                    <item.icon size={28} strokeWidth={currentView === item.name ? 3 : 2} />
                                    {item.name}
                                </motion.button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;
