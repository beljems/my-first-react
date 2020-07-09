import axios from 'axios';
export const SET_CATEGORIES = 'joke/category/set-categories';

const initialState = {
    categories: []
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_CATEGORIES:
            return {
                categories: action.payload
            };
        default:
            return state;
     }
}

export function getCategories() {
    return async function(dispatch) { // using thunk side effect to add api method
        const res = await axios({
            method: 'GET',
            url: 'https://api.chucknorris.io/jokes/categories'
        })

        /*return function(dispatch) {*/
        const categories = res.data;
        dispatch(setCategories(categories));
       /* };*/
    }
}

export function setCategories(categories) {
    return {
        type: SET_CATEGORIES,
        payload: categories
    }
}

// manual adding of api data
// function getCategoriesRequest() {
//     const categories = [
//         "animal",
//         "career",
//         "celebrity",
//         "dev",
//         "explicit",
//         "fashion",
//         "food",
//         "history",
//         "money",
//         "movie",
//         "music",
//         "political",
//         "religion",
//         "science",
//         "sport",
//         "travel"
//     ]
//
//     return categories;
// }
