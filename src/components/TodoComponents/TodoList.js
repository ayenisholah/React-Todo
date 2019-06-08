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
            <div className="todo-list">
                {
                    this.props.todoList.map(todo => {
                        return <Todo
                        key={todo.id}
                        itemData={todo}
                        markCompletedFunction={this.props.markTodoAsCompleteFunction}
                        />
                    })
                }
                <button className="clear-btn" onClick={this.props.clearCompletedTodoFunction}>
                    Clear Todo
                </button>
            </div>
        )
    }
}

export default Todolist;