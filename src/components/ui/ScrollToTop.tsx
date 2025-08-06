import React from 'react';
import { ChevronUp } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const ScrollToTop: React.FC = () => {
    const { isVisible, scrollToTop } = useScrollToTop();

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 z-40"
            aria-label="Scroll to top"
        >
            <ChevronUp size={24} />
        </button>
    );
};

export default ScrollToTop;