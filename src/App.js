import './App.css';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState([])
  const [charName, setCharName] = useState("")
  const [charDisplay, setCharDisplay] = useState('')

  const simpsons = ["Homer", "Marge", "Bart", "Lisa", "Maggie", "Santa's Little Helper", "Grandpa"]
  const familyGuy = ["Peter", "Louis", "Meg", "Chris", "Stewie", "Brain", "Quagmire", "Cleveland", "Joe"]
  const futurama = ["Fry", "Bender", "Leela", "Professor", "Amy", "Hermes", "Zoidberg", "Nibbler"]

  let id = 0

  function searchCharacter(){
    if(selected === "simpsons"){
      const simpsonsItems = simpsons.map((character) => (
        character === charName? <li key={id++}><b>FOUND: {character}</b></li> : <li key={id++}>{character}</li>
      ))
      setCharDisplay(simpsonsItems)
    } 
    if(selected === "familyguy"){
      const familyGuyItems = familyGuy.map((character) => (
        character === charName? <li key={id++}><b>FOUND: {character}</b></li> : <li key={id++}>{character}</li>
      ))
      setCharDisplay(familyGuyItems)
    }
    if(selected === "futurama"){
      const futuramaItems = futurama.map((character) => (
        character === charName? <li key={id++}><b>FOUND: {character}</b></li> : <li key={id++}>{character}</li>
      ))
      setCharDisplay(futuramaItems)
    }
  }

  return (
    <div className="App">
      <h1>Display and Search Arrays with React.js </h1>
      <label htmlFor='text-search'>Character Search: </label>
      <input id="text-search" onChange={(e) => setCharName(e.target.value)} name="text-search" type="text" placeholder="Enter a Character Name"></input>
      <label htmlFor="series">Series Select: </label>
      <select id="series-select" onChange={(e) => setSelected(e.target.value)}>
        <option value="" defaultValue>-- Choose an Option --</option>
        <option value="simpsons">Simpsons</option>
        <option value="familyguy">Family Guy</option>
        <option value="futurama">Futurama</option>
      </select>
      <button onClick={() => searchCharacter()}>Search</button>
      <div>
        <ul>
          {charDisplay}
        </ul>
      </div>
    </div>
  );
}

export default App;
