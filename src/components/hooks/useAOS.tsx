import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onceAnimation } from '@/lib/constants';

const useAOS = (options = {}) => {
    useEffect(() => {

        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
            offset: 120,
            delay: 0,
            duration: 400,
            easing: 'ease',
            once: onceAnimation,
            mirror: false,
            anchorPlacement: 'top-bottom',
            ...options,
        });
    }, [options]);
};

export default useAOS;