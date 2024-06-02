import { useState } from "react";

const List = ({}) => {
    const [items, setItems] = useState([]);

    const handleClick = () => {
        const randomValue = Math.floor(Math.random() * 10);
        setItems([...items, randomValue]);
    }

    return (
        <div>
            <h1>List</h1>
            <button onClick={handleClick}>+</button>
            <ul>
                { items.map((item, i) => <li key={i}>{item}</li>) }
            </ul>
        </div>
    );
}

export default List;