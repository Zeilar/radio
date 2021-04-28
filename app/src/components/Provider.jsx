import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { UserContextProvider } from './contexts/UserContext';
import { ScrollToTopContextProvider } from './contexts/ScrollToTopContext';
import { PlayerContextProvider } from './contexts/PlayerContext';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

export default function Provider({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            <UserContextProvider>
                <ThemeProvider theme={theme}>
                    <ScrollToTopContextProvider>
                        <PlayerContextProvider>
                            {children}
                        </PlayerContextProvider>
                    </ScrollToTopContextProvider>
                </ThemeProvider>
            </UserContextProvider>
        </QueryClientProvider>
    );
}
