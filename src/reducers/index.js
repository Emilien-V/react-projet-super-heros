import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import selectHeroesReducer from './selectHeroesReducer';

// const selectedHeroesReducer = (selectedHero = null, action) => {
//     if(action.type === 'SELECTED_HEROES') {
//         return action.payload;
//     }

//     return selectedHero;
// };

export default combineReducers({
    heroes: heroesReducer,
    selectHeroes: selectHeroesReducer
});