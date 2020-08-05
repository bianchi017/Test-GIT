import React, { Component, createRef } from 'react';
import TodoItem from "./components/TodoItem"

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { todo: [] };
        this.inputValue = "";
        this.inputRef = createRef();
    }

    handleCreate = () => {
        if (this.inputValue.trim() !== "") {
            let todoList = this.state.todo;
            todoList.push({ id: Date.now(), title: this.inputValue });
            this.setState({ todo: todoList });
            this.inputRef.current.value = "";
        } else {
            alert("no ingreso nada ):")
        }
    };

    handleChangeInput = value => {
        this.inputValue = value.target.value;
    };

    handleDelete = id => {
        let todoList = this.state.todo.filter(todo => todo.id !== id);
        this.setState({ todo: todoList });
    }

    render() {
        return (
            <div>
                <input ref={this.inputRef} onChange={this.handleChangeInput} placeholder="Ingrese Una Tarea" />
                <button onClick={this.handleCreate} >Enviar</button>
                {this.state.todo.map((todo, index) => <TodoItem key={index} onDelete={this.handleDelete} todo={todo} />)}
            </div>
        )
    }
}