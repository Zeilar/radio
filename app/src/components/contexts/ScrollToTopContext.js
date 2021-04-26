import { createContext, useState } from 'react';

export const ScrollToTopContext = createContext();

export function ScrollToTopContextProvider({ children }) {
    const [visible, setVisible] = useState(false);

    function show() {
        setVisible(true);
    }

    function hide() {
        setVisible(false);
    }

    return (
        <ScrollToTopContext.Provider value={{ visible, show, hide }}>
            {children}
        </ScrollToTopContext.Provider>
    );
}
