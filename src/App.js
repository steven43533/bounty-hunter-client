import './App.css';
import { useState, useEffect } from "react";
import Poster from './Poster';
import Display from './Display'
import Form from './Form';
function App() {

  const [bounties, setBounties] = useState([])
  const [current, setCurrent] = useState({})

  useEffect(() => {
    fetch('http://localhost:8000/bounties')
      .then(response => response.json())
      .then(foundBounties => {
        console.table(foundBounties);
        setBounties(foundBounties)
      })
  }, [])

  const changeCurrent = bounty => {
    setCurrent(bounty)
  }

  const poster = bounties.map(b => {
    return (<Poster
      bounty={b}
      key={b.name}
      changeCurrent={changeCurrent} />)
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wanted</h1>
        <Display bounty={current}/>
      </header>
      <section className="Poster-Board">
        <p>Posters will go here!</p>
        {poster}
      </section>
      <section className="App-header">
        <Form />
      </section>
    </div>
  );
}

export default App;
