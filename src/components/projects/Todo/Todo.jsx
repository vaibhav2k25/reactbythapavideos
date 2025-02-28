import { useState } from "react";
import "./Todo.css";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
    const toDoKeyLocalStorage = "tododata";
    const [inputValue, setInputValue] = useState({});
    const [task, setTask] = useState(()=>{
        const rawToDos = localStorage.getItem(toDoKeyLocalStorage);
        if(!rawToDos) return [];
        return JSON.parse(rawToDos);
    });
    const [dateTime, setDateTime] = useState("");

    const handleInputChange = (value) => {
        setInputValue({ id: value, content: value, checked: false });
    };
    setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setDateTime(`${formattedDate} - ${formattedTime}`)
    }, 1000);
    const handleFormSubmit = (event) => {
        const { id, content, checked } = inputValue;
        event.preventDefault();
        if (!content)
            return;
        const ifTodoContentMatched = task.find((currTask) => currTask.content === content);
        if (ifTodoContentMatched) return;
        /* if (task.includes(inputValue)) {
            setInputValue("");
            return;
        } */
        setTask((prevTask) => [...prevTask, { id: id, content: content, checked: checked }]);
        setInputValue({ id: "", content: "", checked: false });
        console.log(task);
    }

    localStorage.setItem(toDoKeyLocalStorage,JSON.stringify(task));
    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((currTask) => currTask.content != value.content);
        setTask(updatedTask);
    }
    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked };
            } else {
                return curTask;
            }
        });
        setTask(updatedTask);
    };
    const clearAllToDos = () => {
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
                            value={inputValue.content} onChange={(event) => handleInputChange(event.target.value)} />
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
                            return <li key={curTask.id} className="todo-item">
                                <span className={curTask.checked ? "checkList" : "notCheckList"}>{curTask.content}</span>
                                <button className="check-btn" onClick={() => handleCheckedTodo(curTask.content)}><MdCheck /></button>
                                <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}><MdDeleteForever /></button>
                            </li>
                        })
                    }
                </ul>

            </section>
            <section>
                <button className="clear-btn" onClick={() => clearAllToDos()}>Clear All</button>
            </section>
        </section>
    );
};