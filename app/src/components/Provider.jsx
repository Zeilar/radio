import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { UserContextProvider } from './contexts/UserContext';
import { ScrollToTopContextProvider } from './contexts/ScrollToTopContext';
import { PlayerContextProvider } from './contexts/PlayerContext';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

export default function Provider({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <UserContextProvider>
                    <ScrollToTopContextProvider>
                        <PlayerContextProvider>
                            {children}
                        </PlayerContextProvider>
                    </ScrollToTopContextProvider>
                </UserContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
