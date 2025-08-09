import React, { useEffect, useState } from "react"; 
import { MdCheck, MdDeleteForever } from "react-icons/md";


import "./todo.css";


export const Todo = () => {
    const [inputValue, setInputValue] = useState("");  
    const [task, setTask] = useState([]);
    const [dateTime,setdateTime]=useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputValue) return;

        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]);
        setInputValue("");
    };

useEffect(() => {    
    const interval = setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setdateTime(`${formattedDate}  ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
}, []);


const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((cur) => cur !== value);
    setTask(updatedTask);
};

const handleClearTodo=()=>{
            setTask([]);

}

    return (
        <section className="todo-container">
            <header>
                <h1>TODO-LIST</h1>
            </header>
            <h2 className="datetime">{dateTime}</h2>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input
                            type="text"
                            autoComplete="off"
                            value={inputValue}
                            onChange={(event) => handleInputChange(event.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">
                            Add Task
                        </button>
                    </div>
                </form>
            </section>
            <section  className="myUnOrdList">
                <ul>
                    {
                        task.map((cur,index)=>{
                            return <li key={index}>
                                <span>{cur}</span>
                                <button className="check-btn"><MdCheck/></button>         
                                <button className="delete-btn" onClick={()=>handleDeleteTodo(cur)}>
                                    <MdDeleteForever/></button>
                            </li>

                        })
                    }
                </ul>
            </section>
            <section >
                <button className="clear-btn"  onClick={handleClearTodo}>clear All</button>
            </section>

        </section>
    );
};
