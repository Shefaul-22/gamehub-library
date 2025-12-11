import React from 'react';
import { Link } from 'react-router';
import ratingIcon from '../../assets/icon-ratings.png';

const GameCard = ({game}) => {

    // console.log(game);
    const {id} = game;
    return (
        <Link to={`gameDetails/${id}`} className='bg-[#F5F5F5]'>
            <div className='rounded-md shadow-md p-8 md:p-4 hover:scale-105 md:hover:scale-110 cursor-pointer transition-transform duration-500 ease-in-out'>
                <div className='rounded-xl flex justify-center bg-[#D9D9D9]'>
                    <img className='w-44 h-44 ' src={game.coverPhoto} alt="app image" />
                </div>
                <p className='font-medium  text-[#001931] my-4 h-auto md:h-10'>{game.title}</p>
                <div className='flex justify-between flex-wrap gap-2'>
                    <p className='flex items-center btn bg-[#F1F5E8] font-medium text-[#00D390]'> {game.category}</p>

                    <p className='flex items-center btn bg-[#FFF0E1] font-medium text-[#FF8811]'> <img className='w-4 h-4 mr-1' src={ratingIcon} alt="rating icon" /> {game.ratings}</p>

                </div>
            </div>
        </Link>
    );
};

export default GameCard;