import { createContext, useState } from 'react';

export const ScrollToTop = createContext();

export function ScrollToTopProvider({ children }) {
    const [visible, setVisible] = useState(false);

    function show() {
        setVisible(true);
    }

    function hide() {
        setVisible(false);
    }

    return (
        <ScrollToTop.Provider value={{ visible, show, hide }}>
            {children}
        </ScrollToTop.Provider>
    );
}
