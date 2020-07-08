import { createStore } from 'redux';

const initialState = {
    user: null,
    username: '',
};

function schoolReducer(state = initialState, action) {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case 'login':
            return Object.assign({}, state, {username: ''})
        case 'logout':
            return Object.assign({}, state, {username: ''}, {user: action.user})
        case 'handleUsername':
            return Object.assign({}, state, {username: action.username})
        case 'handleUser':
            return Object.assign({}, state, {user: action.user})
        default:
            return state;
    }
}

const store = createStore(schoolReducer);

export default store