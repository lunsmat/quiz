import { Flex } from '@chakra-ui/react';
import React from 'react';

import { Provider } from './components/ui/provider';
import { HomePage } from './pages/HomePage';

const App: React.FC = () => {
    return (
        <Provider>
            <Flex
                direction="column"
                align="center"
                justify="center"
                minH="100dvh"
                p={5}
            >
                <HomePage />
            </Flex>
        </Provider>
    );
}

export default App;
