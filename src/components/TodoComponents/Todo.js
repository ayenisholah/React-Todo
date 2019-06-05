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

export class ContainerTodo extends Component {
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

    addTodo = () =>
}