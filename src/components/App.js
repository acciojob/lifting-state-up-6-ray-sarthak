
import React, {useState}from "react";
import './../styles/App.css';
import TodoList from "./TodoList";



const App = () => {

  let [list,setList]=useState([{item:"Learn React",completed:false},{item:"Learn Css",completed:false},{item:"Learn Js",completed:false}]);

  
  const handleComplete = (index) => {
    const newList = [...list];
    newList[index].completed = true;
    setList(newList);
};

  return (
    <div>
        {/* Do not remove the main div */}
        <TodoList list={list} handleComplete={handleComplete}/>
    </div>
  )
}

export default App
