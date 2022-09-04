import '@fontsource/bigelow-rules';
import {useEffect, useState} from "react";

import './App.css';
import CardList from "./components/card-list/card-list.component";

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [monsters, setMonsters] = useState([]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => setMonsters(users))
  }, [])

    useEffect(() => {
        setFilteredMonsters(monsters.filter(monster => monster.name.toLowerCase().includes(searchField)));
    }, [monsters, searchField])

  return (
      <div className="App">
        <h1 className='title'>Monsters Rolodex</h1>
        <input className='search-box' type="search" placeholder='search monsters' onChange={(event) => onSearchChange(event)}/>
        <CardList monsters={ filteredMonsters } />
      </div>
  )
}

export default App;
