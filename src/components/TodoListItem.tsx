import React from 'react';
import '../App.css';

interface TodoListItemProps  {
    todo: Todo;
    updateTodo: UpdateTodo;

};
// todo = {text: '', completed: false}

const TodoListItem: React.FC<TodoListItemProps> = ( {todo, updateTodo} ) => {
    return (
        <li className="list-group-item">
            <label htmlFor="">
                <input type='checkbox' checked={todo.completed} onChange={() => updateTodo(todo)}/>
            </label>{' '}
            <span className={todo.completed ? 'text-danger complete' : undefined}>{todo.text}</span>
        </li>
    );
}

export default TodoListItem;