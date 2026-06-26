import { Loader } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { Question as QuestionComponent } from '../components/Question';

interface Question {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

interface ApiResponse {
    response_code: number;
    results: Question[];
}

export const QuizPage: React.FC = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const loadQuiz = async () => {
        const response = await axios.get<ApiResponse>('https://opentdb.com/api.php', {
            params: {
                amount: 10,
                category: 18,
                difficulty: 'medium',
                type: 'multiple'
            }
        });

        if (response.status !== 200 && response.data.response_code !== 0) {
            alert("Erro ao pegar da API");
            navigate('/');
            return;
        }

        setQuestions(response.data.results);
        setLoading(false);
    }

    const onAnswerSubmit = (correct: boolean) => {
        const totalCorrect = correctAnswers + (correct ? 1 : 0);

        if (currentQuestion >= questions.length - 1) {
            alert("Quiz Finalizado Você acertou " + totalCorrect);
            navigate('/');
            return;
        }

        setCorrectAnswers(totalCorrect);
        setCurrentQuestion(currentQuestion + 1);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 300);
    }

    useEffect(() => {
        loadQuiz().catch(() => {
            alert("Erro Inesperado");
            navigate('/');
        });
    }, []);

    if (loading) return <Loader />;

    return <QuestionComponent
                question={questions[currentQuestion]}
                answerSubmit={onAnswerSubmit}
            />;
}
