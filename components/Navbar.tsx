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

const InstagramIcon = memo(({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className}>
        <defs>
            <radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stopColor="#FD5" /><stop offset=".1" stopColor="#FD5" /><stop offset=".5" stopColor="#FF543E" /><stop offset="1" stopColor="#C837AB" /></radialGradient>
            <radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stopColor="#3771C8" /><stop offset=".128" stopColor="#3771C8" /><stop offset="1" stopColor="#60F" stopOpacity="0" /></radialGradient>
        </defs>
        <g fill="none">
            <rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60" />
            <rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60" />
            <path fill="#ffffff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z" />
        </g>
    </svg>
));

InstagramIcon.displayName = 'InstagramIcon';

const LinkedInIcon = memo(({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className}>
        <g fill="none">
            <rect width="256" height="256" fill="#fff" rx="60" />
            <rect width="256" height="256" fill="#0A66C2" rx="60" />
            <path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z" />
        </g>
    </svg>
));

LinkedInIcon.displayName = 'LinkedInIcon';

const BehanceIcon = memo(({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" className={className}>
        <path fill="#3b38f5" d="M19.5 12.4c.2.3.4.6.5 1.1h-3.2c0-.1 0-.3.1-.5s.1-.3.3-.5c.1-.2.3-.3.5-.4c.2-.1.5-.2.8-.2c.4.1.8.2 1 .5zm-9.2-.7c.2-.2.4-.5.4-.9c0-.2 0-.4-.1-.6c-.1-.1-.2-.3-.3-.3c-.1-.1-.3-.1-.5-.2H7.2V12h2.2c.3 0 .6-.1.9-.3zm-.8 1.7H7.2v2.7h2.3c.2 0 .4 0 .6-.1c.2 0 .4-.1.5-.2c.1-.1.3-.2.4-.4c.1-.2.1-.4.1-.6c0-.5-.1-.9-.4-1.1c-.3-.2-.7-.3-1.2-.3zM26 4.9v16.2c0 2.7-2.2 4.9-4.9 4.9H4.9C2.2 26 0 23.8 0 21.1V4.9C0 2.2 2.2 0 4.9 0h16.2C23.8 0 26 2.2 26 4.9zm-9.6 4.7h4v-1h-4v1zM13.2 15c0-.6-.1-1.1-.4-1.6c-.3-.4-.7-.7-1.3-.9c.4-.2.8-.5 1-.8c.2-.3.3-.7.3-1.2s-.1-.8-.2-1.2c-.2-.3-.4-.6-.6-.7c-.3-.2-.6-.3-1-.4c-.5-.2-.9-.2-1.4-.2H5v9.8h4.8c.4 0 .9-.1 1.3-.2s.8-.3 1.1-.5c.3-.2.6-.5.8-.9c.1-.3.2-.7.2-1.2zm3.6-.3h5.1c0-.6 0-1.1-.1-1.6s-.3-1-.6-1.3c-.3-.4-.7-.7-1.1-.9c-.5-.2-1-.4-1.6-.4c-.5 0-1 .1-1.5.3c-.4.2-.8.5-1.2.8c-.3.3-.6.7-.7 1.2c-.2.5-.3 1-.3 1.5s.1 1.1.3 1.5c.2.5.4.9.7 1.2c.3.3.7.6 1.1.8c.5.2 1 .3 1.5.3c.8 0 1.5-.2 2.1-.6c.6-.4 1-1 1.3-1.8h-1.7c-.1.2-.2.4-.5.6c-.3.2-.6.3-1 .3c-.5 0-1-.1-1.3-.4c-.3-.4-.5-.9-.5-1.5z" />
    </svg>
));

BehanceIcon.displayName = 'BehanceIcon';

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
        <g fill="none">
            <path fill="#48eeff" stroke="#231f20" strokeMiterlimit="10" d="M38.75 20a33 33 0 0 0-1.54-10c0-.51-3.25-4.12-6.56-5.92S21.92.18 19.5.54c-1.66-.06-6.66 1.7-10.06 3.55S3.06 8.68 2.91 9.56A34.3 34.3 0 0 0 1.25 20a34.3 34.3 0 0 0 1.66 10.44c.15.87 3.09 3.56 6.53 5.47s8.4 3.61 10.06 3.55c2.42.36 7.73-1.69 11.15-3.55s6.6-5.41 6.56-5.92A33 33 0 0 0 38.75 20Z" strokeWidth="1" />
            <path stroke="#231f20" strokeLinecap="round" strokeMiterlimit="10" d="M7.25 14.32c.71.54 1.46 1 2.19 1.51C12.85 18 18.13 20.11 20.59 20c1.65-.1 6.65-2 10.06-4.12c.72-.45 1.43-.95 2.1-1.46" strokeWidth="1" />
            <path stroke="#231f20" strokeLinecap="round" strokeMiterlimit="10" d="M20 32.5V22.32c0-2.32 1.73-2.57 1.73-2.57" strokeWidth="1" />
            <path stroke="#231f20" strokeLinecap="round" strokeMiterlimit="10" d="M20 22.32a2.59 2.59 0 0 0-1.71-2.64" strokeWidth="1" />
            <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M26.13 5.34A17.6 17.6 0 0 1 30.77 8" strokeWidth="1" />
        </g>
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
