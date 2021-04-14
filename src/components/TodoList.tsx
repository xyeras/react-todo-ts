import React from 'react';
import TodoListItem from '../components/TodoListItem';

interface TodoListProps {
    todos: Todo[];
    updateTodo: UpdateTodo;
}

const TodoList: React.FC<TodoListProps> = ( {todos, updateTodo} ) => {

    return (
        <div id='todo-list'>
            <div className="row">
                <div className="col">
                <ul className="list-group">
                    {todos.map((todo, index) => {
                    return (
                        <TodoListItem todo={todo} updateTodo={updateTodo} key={index}/>
                    );
                    })}
                </ul>
                </div>
            </div>
        </div>
    );

};

export default TodoList;