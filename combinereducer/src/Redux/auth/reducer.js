import { CHECK_USER_STATUS } from './actions'

const initState = {
    isLoggedIn: false
};
export const authReducer = (store = initState, action) => {
    switch (action.type) {
        case CHECK_USER_STATUS:
            if (action.payload !== null) {
                // if authToken exists in local storage
                return {
                    ...store,
                    isLoggedIn: true
                }
            }
            return store;
        default:
            return store;
    }
}