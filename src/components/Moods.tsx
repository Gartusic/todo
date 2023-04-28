import React from 'react';
import Mood from '../models/mood';
const Moods:React.FC<{items:Mood[]}> = (props) => {
    return (
        <ul>
            {props.items.map( (item) => 
                <li key={item.id}>{item.score}</li>
            )}
        </ul>
    );
};

export default Moods;