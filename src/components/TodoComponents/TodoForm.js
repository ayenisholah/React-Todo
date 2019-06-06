import React from 'react';

const TodoForm = ({task ,changeHandler , addTodo }) =>{
    return(
        <div>
           <input
           value={task}
           onChange={changeHandler}
           type ='text'
           /> 
           <button onClick={addTodo}>Add todo</button>
        </div>
    )    
}
export default TodoForm