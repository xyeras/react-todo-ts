type Todo = {
    text: string;
    completed: boolean;
};

type AddTodo = (newTodo:string) => void;

type UpdateTodo = (selectedTodo:Todo) => void;
