import { useState } from "react";

export const Incrementer = () => {
    console.log("Incrementer rendered...")
    let [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(() => count + 1);
    }
    const handleDecrement = () => {
        setCount(() => count - 1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            {/* <SiblingComp count={count}/> */}
            <DerivedState/>
        </>
    );
};

/* const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
]; */

export const DerivedState = () => {
    const[users, setUsers] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "Angles", age: 45 },
    ]);
    return (
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                {
                    users.map((currElem, index) => {
                        return (
                            <li key={index}>
                                {currElem.name} - {currElem.age} year old
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export const SiblingComp = ({ count }) => {
    console.log("Sibling Rendered...");
    return (
        <>
            <h3>Sibling Component {count}</h3>
        </>
    );
};