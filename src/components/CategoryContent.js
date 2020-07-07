import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CategoryContent = () => {
    const { category } = useParams();
    const [joke, setJoke] = useState('');

    useEffect(async () => {

        async function getContent() {

            let res = await axios({
                url: `https://api.chucknorris.io/jokes/random?category=${category}`
            });

            setJoke(res.data.value);
        }

        getContent();

    }, [category]);

    return (
        <div>
            {joke}
        </div>
    )
}

export default CategoryContent;
