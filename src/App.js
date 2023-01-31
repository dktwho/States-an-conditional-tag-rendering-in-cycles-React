import { useState } from 'react';
import './App.css';
import { initNotes } from './data'

function App() {
  const [notes, setNotes] = useState(initNotes)

  const result = notes.map((note) => {
    let desc;
    if(note.show) {
      desc = <i>{note.desc}</i>
    }

    function showDesc(id) {
      setNotes(notes.map((note) => {
        if(note.id === id) {
          return {...note, show: !note.show}
        } else {
          return note
        }
      }))
    }

    return <p key={note.id}>
      {note.name}
      {desc}
      <button onClick={() => showDesc(note.id)}>{note.show ? 'hide desc' : 'show desc'}</button>
     
    </p>  

  })
  
  return (
    <div className="App">
      {result}
    </div>
  );
}

export default App;
