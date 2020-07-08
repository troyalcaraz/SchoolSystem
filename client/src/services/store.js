import { createStore } from 'redux';

const initialState = {
    user: null, //object for user
}


function schoolReducer(state = initialState, action){
    switch(action.type){
        case 'login':
            return Object.assign({}, state, {username: '', user: action.user})
        // case 'handleUsername':
        //     return Object.assign({}, state, {username: action.username})
        // case 'handleBidChange':
        //     return Object.assign({}, state, {bid: action.bid})
        // case 'addBid':
        //     return Object.assign({}, state, {bid: action.bid})
        // case 'handleProductFieldChange':
        //     return Object.assign({}, state, {product: action.product})
        // case 'loadAuction':
        //     return Object.assign({}, state, {auction: action.auction})
        // case 'expirationTypeChange':
        //     return Object.assign({}, state, {auction: action.auction})
        // case 'expirationDateChange':
        //     return Object.assign({}, state, {auction: action.auction})
        // case 'loadAuctionList':
        //     return Object.assign({}, state, {auctionList: action.auctionList})
        default: //leave this in!!!!
            return state;
    }
}




let store = createStore(schoolReducer);

export default store;