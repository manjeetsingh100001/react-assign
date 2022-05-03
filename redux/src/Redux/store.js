import { legacy_createStore as createStore } from 'redux';
import { reducer } from './reducer';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store, reducer };

store.subscribe(() => {
    console.log("subscribe: ", store.getState());
})

console.log(store.getState())