import React from 'react';
import { useParams } from 'react-router';

const GameDetails = () => {
    const {id} = useParams();
    return (
        <div>
            gamedetails {id}
        </div>
    );
};

export default GameDetails;