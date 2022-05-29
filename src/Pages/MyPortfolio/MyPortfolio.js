import React from 'react';
import PortfolioAbout from './PortfolioAbout';
import PortfolioBanner from './PortfolioBanner';
import Project from './Project';
import Skills from './Skills';

const MyPortfolio = () => {
    return (
        <div className="bg-[#111318]">
            <PortfolioBanner />
            <div class="divider container mx-auto bg-slate-500 h-2 rounded"></div>
            <PortfolioAbout />
            <div class="divider container mx-auto bg-slate-500 h-2 rounded"></div>
            <Skills />
            <div class="divider container mx-auto bg-slate-500 h-2 rounded"></div>
            <Project />
        </div>
    );
};

export default MyPortfolio;