import { decrement, increment, reset, fallenRomanEmpire } from "../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function ExampleCounter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <p className="mb-3">Conteggio: {count} </p>
            <button className="bg-black p-2 rounded-md mb-0" onClick={() => dispatch(increment())}>Incrementa</button>
            <button className="bg-black ml-4 mr-4 p-2 rounded-md mb-0" onClick={() => dispatch(decrement())}>Decrementa</button>
            <button className="bg-black p-2 rounded-md mb-0" onClick={() => dispatch(reset())}>Reset</button>
            <button className="bg-black p-2 rounded-md mb-0" onClick={() => dispatch(fallenRomanEmpire())}>Caduta dell Impero Romano</button>
        </div>
    );
}

export default ExampleCounter;