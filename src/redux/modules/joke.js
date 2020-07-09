import axios from 'axios';

export const SET_JOKE = 'joke/set-joke';

const initialState = {
    joke: '',
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_JOKE:
            return {
                joke: action.payload
            };
        default:
            return state;
     }
}

export function getJoke(category) {
    return async function(dispatch) { // using thunk side effect to add api method
        const res = await axios({
            url: `https://api.chucknorris.io/jokes/random?category=${category}`
        })

        const joke = res.data.value;
        dispatch(setJoke(joke));

    }
}

export function setJoke(joke) {
    return {
        type: SET_JOKE,
        payload: joke
    }
}
