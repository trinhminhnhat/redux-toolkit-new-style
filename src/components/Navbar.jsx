import { useSelector } from 'react-redux';

import { todoSelector } from '../store/reducers/todoSlice';

const Navbar = () => {
    const todos = useSelector(todoSelector);

    return (
        <div className="navbar">
            <h1>Redux Toolkit New Style App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todo: {todos.length}</li>
            </ul>
        </div>
    );
};

export default Navbar;
