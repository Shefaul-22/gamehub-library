import { useEffect } from 'react';
import { useLocation } from 'react-router';

const useDynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const { pathname } = location;

        if (pathname === '/') {
            document.title = 'Home | GameHubLibrary';
        }
        else if (pathname === '/login') {
            document.title = 'Login | GameHubLibrary';

        }
        else if (pathname === '/register') document.title = 'Register | GameHubLibrary';
        else if (pathname === '/userDetails') document.title = 'My Profile | GameHubLibrary';
        else if (pathname === '/updateProfile') document.title = 'Update Profile | GameHubLibrary';
        else if (pathname === '/forgotPassword') document.title = 'Forgot Password | GameHubLibrary';
        else document.title = 'GameHubLibrary';
    }, [location]);
};

export default useDynamicTitle;
