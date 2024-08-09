'use client';

import React from 'react';
import './ratingBar.scss';

interface ProgressBarProps {
    score: number;
    maxScore: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ score, maxScore }) => {
    const percentage = (score / maxScore) * 100;

    return (
        <div className="container">
            <span className="label">{score}점</span>
            <div className="progressBar">
                <div
                    className="progress"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;

