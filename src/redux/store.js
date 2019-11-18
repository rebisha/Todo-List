import { createStore, compose } from 'redux';
import commonReducer from './commonReducer';

let initialState = {};

export default createStore(commonReducer, initialState,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );