import React,{useState} from "react";

export default function Memories(){

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    
    const calculation = expensiveCalculation(count);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    const additem = () => {
      setTodos((t) => [...t, "Items"]);
    };
  

    return(
        <div>
            <h2>Memo</h2>
            <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={additem}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
        </div>
    )
}
const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };