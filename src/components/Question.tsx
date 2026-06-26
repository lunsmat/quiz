import { Box, Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

export const Question: React.FC = () => {
    return (
        <Flex
            direction="column"
            h="100vh"
            w="100%"
            p={8}
            maxW="4xl"
            mx="auto"
        >
            <Box mb={10} textAlign="center">
                <Heading size="3xl">
                    O que significa HTML?
                </Heading>
            </Box>

            <SimpleGrid columns={2} gap={6} flex="1">
                <Button
                    h="full"
                    w="full"
                    variant="outline"
                    borderWidth="4px"
                    borderColor="blue.500"
                    bg="transparent"
                    color="inherit"
                    fontSize="2xl"
                    fontWeight="bold"
                    whiteSpace="normal"
                    p={6}
                    _hover={{
                        bg: "gray.100",
                        _dark: { bg: "gray.800" }
                    }}
                >
                    Alternativa 1
                </Button>
            </SimpleGrid>
        </Flex>
    );
};
