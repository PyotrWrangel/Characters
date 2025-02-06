import { decrement, increment, reset } from "../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function ExampleCounter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <p className="mb-3">Conteggio: {count} </p>
            <button onClick={() => dispatch(increment())}>Incrementa</button>
            <button onClick={() => dispatch(decrement())}>Decrementa</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
}

export default ExampleCounter;