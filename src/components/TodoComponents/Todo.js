import React from 'react';

const todo =({id, task, strikeThrough})=>{
    return (
        <div key={id}>
            <p>{task}</p>
        </div>
    )

}

export default todo