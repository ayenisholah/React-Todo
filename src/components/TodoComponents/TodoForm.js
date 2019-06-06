import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form
                onSubmit={this.props.addFunction}
            >
                <input
                    type="text"
                    value={this.props.formText}
                    name="todo"
                    onChange={this.props.onFormChangeFunction}
                >
                </input>
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm