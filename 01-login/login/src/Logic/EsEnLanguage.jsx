import { useState } from "react";

const useTerms = () =>{

    const [language, setLanguage] = useState('en');
    
    const changeLanguage = (e) => {
        setLanguage(e.target.value);
    };

    return [language, changeLanguage]

}

export default useTerms