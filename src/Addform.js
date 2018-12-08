import React,{Component} from 'react';

class AddTodo extends Component{
    state = {
        content:''
    }

    handleChange = (e) =>{
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodos(this.state);
        this.setState({
            content:''
        })

    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="add">Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}


export default AddTodo;