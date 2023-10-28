
import './App.css';
import { useState } from "react";

function App() {
  const [inpValue, setInpValue] = useState("")
  const [todoData, setTodoData] = useState([])

  const addTodo = () => {
    setTodoData(prev => [...prev, inpValue])
  }

  const editTodo = (index) => {
    const newTodo = prompt("Enter your new todo")
    console.log(newTodo)
    if (newTodo) {
      const editedArr = todoData.map((e, i) => (index === i) ? todoData[index] = newTodo : todoData[i])
      setTodoData(editedArr)
    }
    else {
      alert("No todo entered")
    }
  }

  const dltTodo = (index) => {
    const deletedArr = todoData.filter((e, i) => index != i)
    setTodoData(deletedArr)
  }

  const dltAllTodo = () => {
    setTodoData([])
  }

  return (
    <div className="todo">
      <div className='inp-btns'>
        <input className='inp' type="text" placeholder="Enter todo" onChange={(event) => {
          // console.log(event.target.value);
          setInpValue(event.target.value);  //rerender chlta hai 
          // console.log(inpValue);
        }} />
        <div>
          <button onClick={addTodo} className='todo-btns'>Add Todo</button>
          <button onClick={dltAllTodo} className='todo-btns'>Delete All</button>
        </div>
      </div>
      <ul className='todo-list'>
        {
          todoData.length ? todoData.map((e, i) => <li className="todo-item" key={i}>{e}
            <div className='edit-dlt-btns'>            <button onClick={() => editTodo(i)} className='edit-btn'>Edit Todo</button>
              <button onClick={() => dltTodo(i)} className='dlt-btn'>Delete Todo</button>
            </div>
          </li>) : <h3 className='no-todo'><i>No todo here</i></h3>
        }
      </ul>
    </div>
  );
}


export default App;
