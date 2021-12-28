import { numberReducer } from './number';
import { userReducer } from './users';
export function reducer(state, action) {
    let newState = numberReducer(state, action)
    return userReducer(newState, action)
}