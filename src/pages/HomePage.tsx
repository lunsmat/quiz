import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router';

export const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigateToQuiz = () => {
        navigate('/quiz');
    }

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
                onClick={handleNavigateToQuiz}
            >
                Iniciar Quiz
            </Button>
        </Flex>
    );
}
