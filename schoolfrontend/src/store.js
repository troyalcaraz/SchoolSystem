import { createStore } from 'redux';

const initialState = {
    user: null,
    fullname: '',
    username: '',
    grades: [],
};

function schoolReducer(state = initialState, action) {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case 'login':
            return Object.assign({}, state, {username: '', user: action.user})
        case 'handleUsername':
            return Object.assign({}, state, {username: action.username})
        default:
            return state;
    }
}

let store = createStore(schoolReducer);

export default store;