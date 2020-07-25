import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    
    render(){
        console.log(this.props.todos);
        return this.props.todos.map((todo) =>(
        //<h3>{ todo.title }</h3>//use javascript expression
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
    }
}


//Prop Types <-- good proctise to have
Todos.propType = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
  