import { Flex } from '@chakra-ui/react';
import React from 'react';

import { Provider } from './components/ui/provider';
import { Router } from './Router';

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
                <Router />
            </Flex>
        </Provider>
    );
}

export default App;
