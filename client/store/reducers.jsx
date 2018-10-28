import { combineReducers } from 'redux';
import { POPUP_TOGGLE } from './actions.jsx';

const popupReducer = (state = false, action) => {
    switch (action.type) {
        case POPUP_TOGGLE:
            return !state;
        default:
            return state;
    }
};

const popup = combineReducers({
    popupToggle: popupReducer,
});

export default popup;