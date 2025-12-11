import React, { useEffect, useState } from 'react';
import GameCard from '../GameCard/GameCard';
import Loading from '../Loading/Loading';

const Allgames = () => {

    const [allgamesData, setAllgamesData] = useState([]);

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/allgames.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setAllgamesData(data);
                setLoading(false);
            })
    }, [])


    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div className='bg-[#F5F5F5]'>
            <div className='py-14 md:py-20  px-4 mt-5 md:mt-10'>
                <h2 className='font-bold text-center text-5xl mb-4'>All Games</h2>
                <p className='text-center text-xs md:text-xl text-[#627382]'>Explore All games on our website developed by Unity</p>

                <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>

                    {
                        allgamesData.map(game => <GameCard game={game} key={game.id}></GameCard>)
                    }

                </div>

            </div>
        </div>
    );
};

export default Allgames;