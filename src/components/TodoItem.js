import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    //the styling in jsx(react), bit diff with css, no dash, change to camel case
    
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through':'none'
        }
    }

   
    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}> 
                <p> <input type='checkbox' onChange={this.props.markComplete.bind(this,id)}/> {' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                    </p>
            </div>
        )
    }
}

//Prop Types <-- good proctise to have

TodoItem.propType = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: '1px',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


const itemStyle = {backgroundColor: '#f4f4f4'}
export default TodoItem