import { Box, Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';

import { decodeHtml } from '../utils/decodeHtml';
import { shuffle } from '../utils/shuffleArray';

interface IQuestion {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

interface QuestionProps {
    question: IQuestion;
    answerSubmit: (correct: boolean) => void;
}

const BORDER_COLORS = ["blue.500", "purple.500",
    "orange.500", "cyan.500"];

export const Question: React.FC<QuestionProps> = ({ question, answerSubmit }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const answers = useMemo(() => {
        const answers = [...question.incorrect_answers, question.correct_answer];

        return shuffle(answers);
    }, []);

    const handleAnswerClick = (index: number) => {
        if (selectedIndex !== null) return;

        const correct = answers[index] === question.correct_answer;
        setSelectedIndex(index);

        setTimeout(() => {
            answerSubmit(correct);
        }, 1000);
    }

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
                    {decodeHtml(question.question)}
                </Heading>
            </Box>

            <SimpleGrid columns={2} gap={6} flex="1">
                {answers.map((answer, index) => {
                    const isSelected = selectedIndex === index;
                    const hasSelection = selectedIndex !== null;

                    let bg = "transparent";
                    let color = "inherit";

                    if (isSelected) {
                        bg = answer === question.correct_answer ?
                            "green.500" : "red.500";
                        color = "white";
                    }

                    const borderColor = BORDER_COLORS[index % 4];

                    return (
                        <Button
                            key={index}
                            disabled={hasSelection && !isSelected}
                            h="full"
                            w="full"
                            variant="outline"
                            borderWidth="4px"
                            borderColor={isSelected ? bg : borderColor}
                            bg={bg}
                            color={color}
                            fontSize="2xl"
                            fontWeight="bold"
                            whiteSpace="normal"
                            p={6}
                            _hover={{
                                bg: hasSelection ? bg : "gray.100",
                                _dark: {
                                    bg: hasSelection ? bg : "gray.800"
                                }
                            }}
                            _disabled={{
                                opacity: 0.4,
                                cursor: "not-allowed"
                            }}
                            onClick={() => handleAnswerClick(index)}
                        >
                            {decodeHtml(answer)}
                        </Button>
                    );
                })}
            </SimpleGrid>
        </Flex>
    );
};
