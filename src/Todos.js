import React from 'react';

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo =>{
      return(
        <div onClick = {() => {deleteTodo(todo.id)}} className="collection-item" key = {todo.id}>
          <span>{todo.content}</span>
          <a><i className="small material-icons right   cyan-text text-darken-3 scale-transition">remove_circle</i></a>
        </div>
      )
    })
  ) : (
    <p className="center"> You have no todo's left, Great Job!!!</p>
  )
  return(
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;
