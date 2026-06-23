import { Button, Flex } from '@chakra-ui/react';
import React from 'react';

export const HomePage: React.FC = () => {
    return (
        <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
        >
            <Button
                size="xl"
                variant="outline"
                colorPalette="purple"
            >
                Iniciar Quiz
            </Button>
        </Flex>
    );
}
