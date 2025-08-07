import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';
import { ThemeProvider } from './ThemeToggle';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-white">
                <Navbar />
                <main>{children}</main>
                <Footer />
                <ScrollToTop />
            </div>
        </ThemeProvider>
    );
};

export default Layout;