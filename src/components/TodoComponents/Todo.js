import React from 'react';

class Todo extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div
                className={`todo ${this.props.itemData.completed === true ? 'completed' : ''}`}
                onClick={() => this.props.markCompletedFunction(this.props.itemData.id)}
            >
                <p>{ this.props.itemData.task }</p>
            </div>
        )
    }
}

export default Todo;