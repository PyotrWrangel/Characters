import { useState, useEffect } from "react";
import { add, toggle, remove } from "../redux/listSlice";
import { useDispatch, useSelector } from "react-redux";


function ExampleList() {
    const list = useSelector((state) => state.list.value);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        console.log("List updated:", list);
    }, [list]);

    return (
        <div>
            <p className="mb-3"> TodoList:{list.join(", ")} </p>
            <input type="text" className="bg-black p-2 rounded-md mb-0" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button className="bg-black p-2 rounded-md mb-0" onClick={() => { dispatch(add(inputValue)); setInputValue("");}}>Aggiungi</button>
            <button className="bg-black ml-4 mr-4 p-2 rounded-md mb-0" onClick={() => dispatch(toggle())}>Toggle</button>
            <button className="bg-black p-2 rounded-md mb-0" onClick={() => dispatch(remove())}>Rimuovi</button>
        </div>
    )
}

export default ExampleList