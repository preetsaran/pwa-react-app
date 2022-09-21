import React, { useState, useRef } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState(['Make Coffee', 'Make Tea', 'Make Juice']);
  const ref = useRef();

  const addTodo = () => {
    if( ref.current.value) {
      setTodoList([...todoList, ref.current.value])
      ref.current.value = ''
    }
    else {
      alert('Please add title of Todo')
    }
  }

  const handleDelete = (idx) => {
    setTodoList([...todoList].filter((item, index) =>  index !== idx))
  }

  return (
    <div style={{display: 'flex',flexDirection: 'column',marginTop: '10%', alignItems: 'center'}}>
      {todoList.map((Item, idx) => {
        return(
          <div key={idx} style={{display: 'flex', justifyContent:'center', height:'5vh'}}>
            <div style={{display: 'flex', justifyContent:'space-between', width: '7rem'}}>
              {Item}
            </div>
            <button onClick={() => handleDelete(idx)} style={{height: 'fit-content'}}>Delete</button>
          </div>
        )
      })} 

      <div style={{display: 'flex', justifyContent:'space-between', width: '16rem'}}>
        <span> Add item: </span>
        <input ref={ref} type="text" />
        <button onClick={addTodo} >+</button>
      </div>
    </div>
  )
}

export default Todo;