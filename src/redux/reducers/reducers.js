import { LOAD_USERS, LOAD_USER, ADD_USER, UPDATE_USER, DELETE_USER } from "../actions/actions"

let initialState = {users: []};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            console.log('action.payload' + action.payload);
            return {...state, users: action.payload};
        case LOAD_USERS:
            return {...state, users: [...action.payload]};
        case LOAD_USER:
            return {};
        case UPDATE_USER:
            return {};
        case DELETE_USER:
            return {};
        default:
            return state;
    }
}

export { reducer }