import React, { FormEvent, useState } from 'react';

interface AddTodoProps {
    addTodo: AddTodo;
}

const AddTodo: React.FC<AddTodoProps> = ( {addTodo} ) => {
    
    const [todoItem, setTodoItem] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(todoItem);
        setTodoItem('');
    }
    
    return (
        <div id="add-todo">
            <div className="row my-3">
                <div className="col">
                    <form action="">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                value={todoItem}
                                onChange={e => setTodoItem(e.target.value)}
                            />
                            <div className="input-group-prepend">
                                <button className="btn btn-secondary" onClick={handleSubmit}>Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTodo;