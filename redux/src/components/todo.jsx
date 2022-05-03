import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toggleTodo } from '../Redux/actions';

export const Todo = () => {
    const id = useParams().id;
    const { todos } = useSelector(

        store => store,
        (pre, curr) => {
            // if (pre.status === curr.status) {
            //     console.log(`status is changed in UI`)
            // }
            console.log(pre, curr);
            return false;
        }
    );

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