// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'

class Todolist extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div
                className="todo-list"
            >
                <p>Todo List</p>
                <button className="clear-btn">
                    Clear Todo
                </button>
            </div>
        )
    }
}

export default Todolist;