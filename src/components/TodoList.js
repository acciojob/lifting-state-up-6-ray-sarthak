import React from "react";


const TodoList=({list,handleComplete})=>{
    


console.log("hello");




    return (

        <div>

            {list.map((item, index) => (
                <div key={index}>{item.item}
                {!item.completed ? <button onClick={() => handleComplete(index)}>Complete</button> : ""}
                </div>
                 ))}
        </div>
    )
}

export default TodoList;