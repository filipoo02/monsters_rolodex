import '@fontsource/bigelow-rules';
import {Component} from "react";

import './App.css';
import CardListComponent from "./components/card-list/card-list.component";

class App extends Component {
  apiAddress = 'https://jsonplaceholder.typicode.com/users';

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch(this.apiAddress)
        .then(res => res.json())
        .then(users => this.setState(() => ({monsters: users, filteredMonsters: users})))
  }

  setSearchField(event) {
    this.setState(() => ({ searchField: event.target.value.toLowerCase() }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));

    return (
      <div className="App">
        <h1 className='title'>Monsters Rolodex</h1>
        <input className='search-box' type="search" placeholder='search monsters' onChange={(event) => this.setSearchField(event)}/>
        <CardListComponent monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
