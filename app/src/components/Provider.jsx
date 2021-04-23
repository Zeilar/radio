import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { UserContextProvider } from './contexts/UserContext';
import { ScrollToTopProvider } from './contexts/ScrollToTopContext';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

export default function Provider({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <UserContextProvider>
                    <ScrollToTopProvider>
                        {children}
                    </ScrollToTopProvider>
                </UserContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
