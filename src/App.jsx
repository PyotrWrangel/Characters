import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm'

function App() {
const [characters, setCharacters] = useState([]);

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


return (
  <>
  <div className="container vh-100 d-flex justify-content-center align-items-center">
    <div className="App">
      <h1>Game of Thrones</h1>
    </div>
  </div>

  <CardForm addCharacter={addCharachter}></CardForm>
  <div className='grid grid-cols-4 gap-5'>
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
