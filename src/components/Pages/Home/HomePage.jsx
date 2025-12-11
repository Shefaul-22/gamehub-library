import React from 'react';
import { useLoaderData } from 'react-router';
import PopularGames from './PopularGames';
import Hero from '../../Hero/Hero';
import NewsLetter from './NewsLetter';

const HomePage = () => {

    const gamesData = useLoaderData();
    // console.log(gamesData);


    return (
        <div>

            <Hero></Hero>
            <PopularGames gamesData={gamesData}></PopularGames>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default HomePage;