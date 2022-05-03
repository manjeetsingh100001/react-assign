import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toggleTodo } from '../Redux/todo/actions';

export const Todo = () => {
    const id = useParams().id;
    const todos = useSelector(store => store.todos.todos);

    const todo = todos.find(e => e.id === id);

    const dispatch = useDispatch();

    return (
        <div>
            <h3>
                To-Do: {todo.title}
            </h3>
            <p>
                Status: {todo.status ? "Completed" : "Not Completed"}
            </p>
            <button
                onClick={() => {
                    dispatch(toggleTodo(id));
                }}>
                {todo.status ? "Mark Not Done" : "Mark Done"}
            </button>
        </div>
    )
}