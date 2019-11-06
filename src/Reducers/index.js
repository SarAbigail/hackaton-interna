import {combineReducers} from 'redux';
import Page from './reducer-select-page.js';
import Catalogue from './reducer-pages';

const allReducers = combineReducers({
    catalogue: Catalogue,
    page: Page
})

export default allReducers;