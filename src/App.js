import React, { Component, useState } from 'react';
import uuid from 'uuid';
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
                <h2>My Todo List</h2>
                {
                    this.state.todoList.map(todoObj => (
                        <div key={todoObj.id}>
                            {todoObj.name}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default App;