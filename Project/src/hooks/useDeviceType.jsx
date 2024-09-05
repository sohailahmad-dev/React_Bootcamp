import { useState, useEffect } from 'react';

const useDeviceType = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDeviceType = () => {
            const isMobileDevice = window.innerWidth <= 768;
            setIsMobile(isMobileDevice);
        };

        // Initial check
        checkDeviceType();

        // Add event listener to handle window resize
        window.addEventListener('resize', checkDeviceType);

        // Clean up event listener
        return () => {
            window.removeEventListener('resize', checkDeviceType);
        };
    }, []);

    return isMobile;
};

export default useDeviceType;
