import React, { Component, useState } from 'react';
import uuid from 'uuid';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

const initialTodoList = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          todoList: initialTodoList,
          todo: '',
        };
    }

    changeHandler = (event) => {
        this.setState({
            todo: event.target.value,
        });
    }

    addTodo = () => {
        const newTodo = {
            id: uuid(),
            task: this.state.todo,
            completed: false,
        };

        const newTodoList = this.state.todoList.concat(newTodo);
        
        this.setState({
            todoList: newTodoList,
            todo: ''
        });
    }

    render() {
        return (
            <div>
                <h2>My Todo App</h2>
                <TodoList todoList = {this.state.todoList}/>
                <TodoForm />
            </div>
        )
    }
}

export default App;