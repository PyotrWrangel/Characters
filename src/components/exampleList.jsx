import { add, toggle, remove } from "../redux/listSlice";
import { useDispatch, useSelector } from "react-redux";

function ExampleList() {
    const list = useSelector((state) => state.list);
    const dispatch = useDispatch();

    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        <span
                            onClick={() => dispatch(toggle(item.id))}
                            style={{
                                textDecoration: item.completed ? "line-through" : "none",
                            }}
                        >
                            {item.text}
                        </span>
                        <button onClick={() => dispatch(remove(item.id))}>Rimuovi</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => dispatch(add(prompt("Inserisci un nuovo elemento")))}>Aggiungi</button>
        </div>
    );
}

export default ExampleList;