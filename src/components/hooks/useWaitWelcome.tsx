import { useEffect, useState } from 'react'
import { WELCOME_TOTAL_LIFE_TIME } from '../pages/home/Welcome/Welcome';

const useWaitWelcome = () => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setVisible(false);
        }, WELCOME_TOTAL_LIFE_TIME);

        return () => clearTimeout(timer);

    }, [])

    return {
        visible,
        setVisible
    }
}

export default useWaitWelcome