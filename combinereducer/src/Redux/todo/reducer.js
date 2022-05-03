import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actions";
import { nanoid } from 'nanoid';

const initState = {
    todos: []
};
export const todoReducer = (store = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...store,
                todos: [
                    ...store.todos,
                    { title: action.payload, status: false, id: nanoid() }
                ]
            };
        case TOGGLE_TODO:
            const id = action.payload;
            return ({
                ...store,
                todos: [
                    ...store.todos.map((e) => {
                        if (e.id === id) {
                            e.status = !e.status;
                            return e;
                        }
                        return e;
                    })
                ]
            });
        case DELETE_TODO:
            return ({
                ...store,
                todos: [
                    ...store.todos.filter(e => e.id !== action.payload)
                ]
            })
        default:
            return store;
    }
}