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

    useEffect(() => {
        loadQuiz().catch(() => {
            alert("Erro Inesperado");
            navigate('/');
        });
    }, []);

    if (loading) return <Loader />;

    return <QuestionComponent question={questions[0]} />;
}
