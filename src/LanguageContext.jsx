import { createContext, useState, useEffect, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const supportedLanguages = ["en", "es", "fr"];
    const storageKey = "preferredLanguage";

    const getInitialLanguage = () => {
        const storedLang = localStorage.getItem(storageKey);

        if (storedLang && supportedLanguages.includes(storedLang)) {
            return storedLang;
        }

        const browserLanguage = navigator.language.slice(0, 2);
        const defaultLang = supportedLanguages.includes(browserLanguage)
            ? browserLanguage
            : "en";

        localStorage.setItem(storageKey, defaultLang);
        return defaultLang;
    };

    const [language, setLanguage] = useState(getInitialLanguage);

    useEffect(() => {
       
        localStorage.setItem(storageKey, language);

   
        const htmlTag = document.getElementById("htmlTag");
        if (htmlTag) {
            htmlTag.setAttribute("lang", language);
        }
    }, [language]);

    const toggleLanguage = () => {
        const currentIndex = supportedLanguages.indexOf(language);
        const nextIndex = (currentIndex + 1) % supportedLanguages.length;
        const newLang = supportedLanguages[nextIndex];
        setLanguage(newLang);
    };

    return (
        <LanguageContext.Provider
            value={{ language, setLanguage, toggleLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
