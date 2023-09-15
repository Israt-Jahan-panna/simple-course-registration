
import { useEffect, useState } from 'react';
import  './card.css'
const Card = () => {
    const [card , setCard] = useState([]);
    useEffect( () => {
        fetch('courses.json')
        .then (res => res.json())
        .then (data => setCard(data))
    } , [])
    return (
        <div>
            <h2>Card Compunent </h2>
        </div>
    );
};

export default Card;