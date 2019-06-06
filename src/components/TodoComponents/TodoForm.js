import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    name="item"
                    onChange={() => {}}
                >
                </input>
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm