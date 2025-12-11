import React from 'react';
import Loading from '../../Loading/Loading';
import GameCard from '../../GameCard/GameCard';
import { Link } from 'react-router';

const PopularGames = ({ gamesData }) => {

    // console.log(gamesData);

    if (!gamesData) {
        return <Loading></Loading>
    }

    const popularGamesData = gamesData.sort((a, b) => b.ratings - a.ratings).slice(0, 6);
    console.log(popularGamesData);

    return (
        <div className='bg-[#bdd7e7] py-14 md:py-20  px-8 md:px-4'>
            <h2 className='font-bold text-center text-5xl mb-4'>Popular Games</h2>
            <p className='text-center text-xs md:text-xl text-gray-800'>Explore All Popular games on the Market developed by Unity</p>

            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>

                {
                    popularGamesData.map(game => <GameCard game={game} key={game.id}></GameCard>)
                }

            </div>
            <Link to="/allgames" className=' flex justify-center px mt-10'>
                <span className='btn btn-primary text-white px-9'>Show All</span>

            </Link>
        </div>
    );
};

export default PopularGames;