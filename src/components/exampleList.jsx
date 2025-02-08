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
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">TodoList:</h1>
            <div className="space-y-2">
    {list.map((item, index) => (
        <div 
            key={index} 
            className={`p-4 rounded-lg shadow-lg cursor-pointer ${item.includes("(completato)") ? "border border-green-500 line-through text-gray-500" : ""}`} 
            onClick={() => dispatch(toggle(index))}
        >
            <span>{item}</span>
        </div>
    ))}
</div>
            <div className="mt-4 flex space-x-2">
                <input 
                    type="text" 
                    className="flex-1 p-2 bg-gray chborder rounded-md " 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    placeholder="Add a new task"
                />
                <button 
                    className="bg-blue-500 text-white p-2 rounded-md" 
                    onClick={() => { dispatch(add(inputValue)); setInputValue(""); }}
                >
                    Aggiungi
                </button>
                <button 
                    className="bg-red-500 text-white p-2 rounded-md" 
                    onClick={() => dispatch(remove())}
                >
                    Rimuovi
                </button>
            </div>
        </div>
    );
}

export default ExampleList;