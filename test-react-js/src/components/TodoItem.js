import React, { Component } from 'react';

export default class TodoItem extends Component {

    handleClick = () => {
        this.props.onDelete(this.props.todo.id);
    }

    render() {
        return (
            <div>
                <h3>{this.props.todo.title}
                    <input type="checkbox" onClick={this.handleClick} />
                </h3>
            </div>
        );
    }
}