import { legacy_createStore as createStore, combineReducers } from 'redux';

import { authReducer } from './auth/reducer';
import { todoReducer } from './todo/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    todos: todoReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState())