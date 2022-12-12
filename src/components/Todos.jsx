import { useSelector } from 'react-redux';

import { todoSelector } from '../store/reducers/todoReducer';

const Todos = () => {
    const todos = useSelector(todoSelector);

    return (
        <div className="todo-list">
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        {todo.title}
                        <input type="checkbox" name="" id="" />
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
