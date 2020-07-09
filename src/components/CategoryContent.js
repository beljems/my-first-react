import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getJoke } from '../redux/modules/joke';

const CategoryContent = (props) => {
    const { category } = useParams();
    // const [joke, setJoke] = useState('');

    // useEffect(() => {
    //
    //     async function getContent() {
    //
    //         let res = await axios({
    //             url: `https://api.chucknorris.io/jokes/random?category=${category}`
    //         });
    //
    //         setJoke(res.data.value);
    //     }
    //
    //     getContent();
    //
    // }, [category]);

    const dispatch = useDispatch();
    const joke = useSelector(state => state.joke.joke);

    useEffect(() => {
        dispatch(getJoke(category));

        console.log(category);
    }, [dispatch, category]);

    return (
        <div>
            {joke}
        </div>
    )
}

export default CategoryContent;
