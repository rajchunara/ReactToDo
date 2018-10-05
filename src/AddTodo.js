import React, {Component} from 'react';

class AddTodo extends Component {
  state = {
    content: ''
  }

  handleChange= (e) => {
    this.setState({
      content:e.target.value
    })
  }

  handleSubmit=(e)=> {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content:''
    })
  }
  render(){
    return (
      <div>
        <form onSubmit= {this.handleSubmit}>
          <h5>Add new todo:</h5>
          <div>
            <input type="text" onChange ={this.handleChange} value={this.state.content} placeholder="Type task and press enter"/>
          </div>
        </form>
      </div>
    )
  }
}

export default AddTodo;
