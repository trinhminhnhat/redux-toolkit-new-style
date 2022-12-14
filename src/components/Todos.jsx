import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { todoSelector, markComplete, deleteTodo, getTodos } from '../store/reducers/todoSlice';
import TodoForm from './TodoForm';

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(todoSelector);

    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

    return (
        <div className="todo-list">
            <TodoForm />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        {todo.title}
                        <input type="checkbox" name="" id="" onChange={() => dispatch(markComplete(todo.id))} />
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
