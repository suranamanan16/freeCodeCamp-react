import React from 'react';
import ToDoItem from "./ToDoItem.js";

function App(){
  const style = function(){
    backgroundColor: "black";
    color: "white";
  }

  return(
    <div className="todo-box">
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export default App;
