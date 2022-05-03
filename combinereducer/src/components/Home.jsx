import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../Redux/todo/actions';
import { useNavigate } from 'react-router-dom'
import './Home.css';

export const Home = () => {
    const dispatch = useDispatch();
    const todos = useSelector(store => store.todos.todos);

    const [Input, setInput] = useState();
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = () => {
        dispatch(addTodo(Input));
    }

    const navigate = useNavigate();
    const gotoTodo = (e) => {
        const path = "/todo/" + e.target.parentElement.id;
        navigate(path);
    }

    const handleDelete = (e) => {
        dispatch(deleteTodo(e.target.parentElement.id));
    }

    return (
        <>
            <input type={"text"} onChange={handleChange}></input>
            <input type={"submit"} value={"Submit"} onClick={handleSubmit}></input>
            {todos.map((e) => {
                return (
                    <div
                        key={e.id}
                        id={e.id}>
                        <span
                            className={e.status ? "todo-done" : "todo-notdone"}
                            onClick={gotoTodo}
                        >
                            {e.title}
                        </span>
                        <button
                            onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                )
            })}
        </>
    )
}