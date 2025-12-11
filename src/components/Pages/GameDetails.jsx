
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import ratingIcon from '../../assets/icon-ratings.png';
import gameNotfoundImg from '../../assets/gamedetails-Error.png'
import Loading from '../Loading/Loading';


const GameDetails = () => {

    const { id } = useParams();
    // console.log(id);
    // const gameId = parseInt(id);

    const [gamesData, setGamesData] = useState([])
    const [loading, setLoading] = useState(true);




    useEffect(() => {
        fetch('/allgames.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGamesData(data);
                setLoading(false);
            })
    }, []);



    const singleGame = gamesData.find(game => game.id === id);
    console.log(singleGame);

    useEffect(() => {
        document.title = singleGame ? `${singleGame.title} | GameHubLibrary` : 'Game Details | GameHubLibrary';
    }, [singleGame]);


    if (loading) {
        return <Loading></Loading>
    }

    if (!singleGame) {

        return (
            <div className='pt-20'>
                <div className=" max-w-7xl mx-auto flex flex-col items-center justify-center  text-center ">

                    <img className='w-72 h-72 mb-8' src={gameNotfoundImg} alt="Game not found image" />

                    <h2 className="text-2xl md:text-5xl font-semibold mb-2 text-[#001931]">OPPS!! GAME NOT FOUND</h2>

                    <p className="text-[#627382] my-3 text-[14px] md:text-xl ">The game you are requesting is not found on our website.  please try another games.
                    </p>

                    <a href="/allgames" className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-2 text-white">Go Back!</a>
                </div>
            </div>
        );
    }

    const { title, coverPhoto, category, description, downloadLink, ratings, developer } = singleGame;

    console.log(downloadLink);



    return (
        <div className=" bg-[#bdd7e7]">

            <div className='max-w-7xl mx-auto p-6 mt-6 md:mt-10'>

                <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:p-2 mt-14">

                    <div className='flex justify-center items-center w-full md:w-96 h-96 bg-[#ffffff] rounded-md'>
                        <img className='w-80 h-80 ' src={coverPhoto} alt={title} />
                    </div>

                    <div className='h-80'>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>
                        <p className="text-[#627382]">Developed by <span className='text-[#632EE3] font-medium'>{developer}</span></p>
                        <div className="border-t border-gray-300 mt-8 w-full"></div>

                        <div className="flex  gap-2 md:gap-10 lg:gap-12 mt-3 md:mt-8">

                            <div>

                                <p className="text-gray-500 text-sm "><span className='font-semibold text-gray-800 text-xl'>Category: </span> {category}</p>

                            </div>


                            <div className='flex items-center'>
                                <img className='w-5 h-5 mr-1' src={ratingIcon} alt="" />

                                <p className="text-[#001931] font-semibold text-xl md:text-2xl ">{ratings}</p>
                            </div>

                        </div>

                        <div className='mt-10 md:mt-46'>

                            <a className="mt-9 px-6 py-3 bg-[#29D390] text-white  rounded-lg font-bold cursor-pointer" href={downloadLink} target='_blank'>DownLoadLink</a>

                        </div>

                    </div>
                </div>



                <div className="border-t border-gray-300  w-full mt-0 md:mt-4
                "></div>


                {/* description */}
                <div className="mt-4 md:mt-10   rounded-xl">
                    <h2 className="text-2xl font-semibold mb-4 text-[#001931]">About the Game</h2>


                    <p className="text-[#627382] leading-relaxed whitespace-pre-line">
                        {description}
                    </p>


                </div>

            </div>

        </div>
    );
};

export default GameDetails;