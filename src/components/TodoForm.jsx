import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo, addTodo2 } from '../store/reducers/todoSlice';

const TodoForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (title !== '') {
            const newTodo = {
                id: nanoid(),
                title,
                completed: false,
            };
            // dispatch(addTodo(newTodo));
            dispatch(addTodo2(newTodo));
            setTitle('');
        }
    };

    return (
        <div>
            <form action="" onSubmit={onFormSubmit}>
                <input type="text" name="" id="" onChange={(e) => setTitle(e.target.value)} value={title} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default TodoForm;
