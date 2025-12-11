import React, { useEffect, useRef, useState } from 'react';
import Loading from '../Loading/Loading';
import { motion, useAnimation } from "framer-motion";

const Hero = () => {

    const [allgamesData, setAllgamesData] = useState([]);
    const sliderRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [loading, setLoading] = useState(true);

    // for controls animation
    const controls = useAnimation(); 

    useEffect(() => {
        fetch('/allgames.json')
            .then(res => res.json())
            .then(data => {
                setAllgamesData(data);
                setLoading(false);
            })
    }, [])

    const sliderGames = allgamesData.slice(0, 6);

    useEffect(() => {
        if (sliderRef.current) {
            setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
        }

        
        controls.start({
            x: [-0, -width],
            transition: {
                duration: 16,
                repeat: Infinity,
                ease: "linear"
            }
        });

    }, [sliderGames, width]);

    if (loading) {
        return <Loading />;
    }

    //  pause on hover
    const handleMouseEnter = () => {
        controls.stop();
    };

    // handle mouse leave
    const handleMouseLeave = () => {
        controls.start({
            x: [-0, -width],
            transition: {
                duration: 16,
                repeat: Infinity,
                ease: "linear"
            }
        });
    };

    return (
        <div className='bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] overflow-hidden py-10'>

            <div className='px-4 md:px-6 lg:px-8 mt-10 md:mt-20'>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center">Featured Games For You</h2>
                <motion.div
                    ref={sliderRef}
                    className="overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        className="flex gap-4"
                        animate={controls}
                    >
                       
                        {sliderGames.concat(sliderGames).map((game, index) => (
                            <div
                                key={index}
                                className="
                                min-w-full
                                md:min-w-[50%]
                                lg:min-w-[33.33%] cursor-pointer bg-gray-200 rounded-xl shadow-md p-5
                            "
                            >
                                <img
                                    src={game.coverPhoto}
                                    alt={game.title}
                                    className="w-full h-52 object-cover rounded-xl"
                                />

                                <p className="text-lg font-semibold mt-3">{game.title}</p>
                                <p className="text-sm text-gray-600">{game.category}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
