import { createStore } from 'redux';

const initialState = {
    user: null,
    username: '',
};

function schoolReducer(state = initialState, action) {
    console.log(state);
    switch(action.type) {
        case 'login':
            return Object.assign({}, state, {username: ''}, {user: action.user})
        case 'logout':
            return Object.assign({}, state, {username: ''}, {user: action.user})
        case 'handleUsername':
            return Object.assign({}, state, {username: action.username})
        default:
            return state;
    }
}

const store = createStore(schoolReducer);

export default store