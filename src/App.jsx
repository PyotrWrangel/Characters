import { useState, useEffect } from 'react'
import reactLogo from './assets/image/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import characters from './assets/characters.json'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople(characters);
  }, []);

  return (
    <>
    <div className="container">
      <div className="row">
        {people.map(person => (
          <div className="col-md-4" key={person.id}>
            <Card person={person} />
          </div>
        ))}
      </div>
    </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="cardCount">
      <div>
      <button
        onClick={() => {
          setCount((prevCount) => {
            const newCount = prevCount + 1;

            if (newCount === 3) {
              setMessage("Ciao da classe");
            } else {
              setMessage("Non è valido caro");
            }

            return newCount;
          });
        }}
      >
        count is {count}
      </button>

      <p>{message}</p>
    </div>


        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Card></Card>
    </>
  )
}

export default App
