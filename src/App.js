import { Component } from 'react';
import './app.css';
import { CardList } from './components/cardList/cardList';
import SearchBox from './components/searchBox/searchBox';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField:''
    };
  }


  componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ monsters: users}) );
  }
  

render() {

  const { monsters, searchField } = this.state; 
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return(
      <div className="App">
        <h1>Filtering</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={ e => {
            this.setState({ searchField: e.target.value })
          }}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
