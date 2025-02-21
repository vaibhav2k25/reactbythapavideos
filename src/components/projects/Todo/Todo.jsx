import { useState } from "react";
import "./Todo.css";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const [dateTime, setDateTime] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    };
    setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setDateTime(`${formattedDate} - ${formattedTime}`)
    }, 1000);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!inputValue)
            return;
        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }
        setTask((prevTask) => [...prevTask, inputValue]);
        setInputValue("");
        console.log(task);
    }
    const handleDeleteTodo = (value)=>{
        const updatedTask = task.filter((currTask)=>currTask!=value);
        setTask(updatedTask);
    }
    const clearAllToDos = ()=>{
        setTask([]);
    }
    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time">{dateTime}</h2>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off"
                            value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">Add Task</button>
                    </div>
                </form>
            </section>
            <section className="myUnOrdList"> 

                <ul>
                    {
                        task.map((curTask, index) => {
                            return <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <button className="check-btn"><MdCheck /></button>
                                <button className="delete-btn" onClick={()=>handleDeleteTodo(curTask)}><MdDeleteForever /></button>
                            </li>
                        })
                    }
                </ul>

            </section>
            <section>
                <button className="clear-btn" onClick={()=>clearAllToDos()}>Clear All</button>
            </section>
        </section>
    );
};