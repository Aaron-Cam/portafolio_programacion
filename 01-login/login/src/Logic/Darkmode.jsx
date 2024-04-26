import { useState } from 'react';

const useDarkMode = () => {
    const [dark, setDark] = useState(true);

    const darkmode = () => {
        setDark(!dark);
    }

    return [dark, darkmode];
}

export default useDarkMode;
