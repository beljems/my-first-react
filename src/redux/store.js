import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categoryReducers from './modules/category';
import jokeReducers from './modules/joke';

const reducers = combineReducers({
    category: categoryReducers,
    joke: jokeReducers,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
