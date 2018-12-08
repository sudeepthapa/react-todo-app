import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './Addform';
class App extends Component {
  state={
    todos:[
      
    ]
  }

  deleteList=(id) =>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id !==id;
    })
    this.setState({
      todos:todos
    })
  }

  addTodos = (todo) =>{
    todo.id = Math.floor(Math.random()*1000);
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo = {this.deleteList} />
          <AddTodo addTodos = {this.addTodos} />
      </div>
    );
  }
}

export default App;
