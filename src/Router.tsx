import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { HomePage } from './pages/HomePage';
import { QuizPage } from './pages/QuizPage';

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="/quiz" element={<QuizPage />} />
            </Routes>
        </BrowserRouter>
    );
};
