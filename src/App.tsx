import React, { useState } from 'react';
// import {Todo} from './types';
import { todoData } from './todoData';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

const App:React.FC = () => {
  
  const [todos, setTodos] = useState<Todo[]>(todoData);

  const addTodo: AddTodo = (todoItem) => {
    setTodos([...todos, {text: todoItem, completed: false}]);
  };

  const updateTodo: UpdateTodo = selectedTodo => {
    
    // map through todos
    // find where object matches todo param
    // updated its completed bool
    // take updated map array and set to todos: setTodos

    const updated = todos.map( (todo: Todo, index: number) => {
      if (selectedTodo === todo) {
        return {...todo, completed: !todo.completed};
      }
      return todo;
    });

    setTodos(updated);

  };
  
  return (
    <div className="container">
      {/* input with button */}
      {/* todos list */}
      {/* todos list with have a todoItem*/}
      <AddTodo addTodo={addTodo} />

      <TodoList todos={todos} updateTodo={updateTodo}/>
    </div>
  );

}

export default App;
