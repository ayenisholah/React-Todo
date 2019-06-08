import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

import './Todo.css';

const todos = [
    {
      task: 'Laundry',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Cook',
      id: 1528817084358,
      completed: false
    }
  ];

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          todos,
          formText: ''
        };
    }

    addTodo = (event) => {
        event.preventDefault();

        const newTodo = {
            task: event.target.todo.value,
            completed: false,
            id: Date.now(),
        };
        
        this.setState({
            todos: this.state.todos.concat(newTodo)
        });
    }

    markTodoAsComplete = (id) => {
        this.setState((previousState) => {
            return {
                todos: this.state.todos.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } else {
                        return todo;
                    }
                })
            }
        });

    }

    clearCompletedTodo = () => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.completed === false)
        });
    }

    onFormChange = (event) => {
        this.setState({
            formText: event.target.value
        });
    }

    render() {
        return (
            <div className="App">
                <div className="header">
                    <h2>My Todo App</h2>
                    <TodoForm
                        addFunction={this.addTodo}
                        formText={this.state.formText}
                        onFormChangeFunction={this.onFormChange}
                />
            </div>
                <TodoList
                    todoList = {this.state.todos}
                    markTodoAsCompleteFunction={this.markTodoAsComplete}
                    clearCompletedTodoFunction={this.clearCompletedTodo}
                    />
            </div>
        )
    }
}

export default App;