import { useState, useCallback } from 'react';

export const useNavigation = () => {
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openMegaMenu = useCallback((menuId: string) => {
        setActiveMegaMenu(menuId);
    }, []);

    const closeMegaMenu = useCallback(() => {
        setActiveMegaMenu(null);
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(prev => !prev);
    }, []);

    return {
        activeMegaMenu,
        isMobileMenuOpen,
        openMegaMenu,
        closeMegaMenu,
        toggleMobileMenu,
    };
};

