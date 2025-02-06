import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm'
import ExampleCounter from './components/exampleCounter'
import ExampleList from './components/exampleList'

function App() {
const [characters, setCharacters] = useState([]);
// eslint-disable-next-line no-unused-vars
const [data, setData] = useState([]);

const addCharachter = (character) => {
  setCharacters([...characters, character]);
};

const removeCharacter = (index) => {
  setCharacters((prevCharacters) => {
    const updatedCharacters = prevCharacters.filter((_, i) => i !== index);
    console.log("Nuova lista:", updatedCharacters); // 🔎 Debug
    return updatedCharacters;
  });
};

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => response.json()).then((data) => {
    setData(data);
    console.log(data);
  });
}, [characters]);

return (
  <>
      <ExampleCounter></ExampleCounter>
      <ExampleList></ExampleList>
  <div className="container mb-5 d-flex justify-content-center">
    <div className="App">
      <h1>Game of Thrones</h1>
    </div>
  </div>

  <CardForm addCharacter={addCharachter}></CardForm>
  <div className='grid grid-cols-4 gap-5 mt-5'>
    {characters.map((character, index) => (
      <Card key={character.id} 
      name={character.name}
      place={character.place}
      ruleOf={character.ruleOf}
      imageUrl={character.imageUrl}
      onRemoveCharacter={() => removeCharacter(index)}>
      index={index}
    </Card>
    ))}
  </div>
  </>
);

}

export default App
