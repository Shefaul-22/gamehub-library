import React from 'react';
import { useLoaderData } from 'react-router';
import PopularGames from './PopularGames';

const HomePage = () => {

    const gamesData = useLoaderData();
    // console.log(gamesData);


    return (
        <div>

            <PopularGames gamesData={gamesData}></PopularGames>
        </div>
    );
};

export default HomePage;