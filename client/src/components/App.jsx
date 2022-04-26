import React from 'react';
import CowAdd from './CowAdd.jsx';
import CowChosen from './CowChosen.jsx';
import CowList from './CowList.jsx';
import searchCow from './searchCow.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: [],
      selectedCow: {
        id: 0,
        name: '',
        description: ''
      }
    };

    this.handleCowClick = this.handleCowClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(name, description) {
    let newCow = {
      name: name,
      description: description
    }
    searchCow.add(newCow)
    .then( () => {
      // console.log('about to change')
      this.setState({
        cows: [...this.state.cows, newCow]
      })
      // console.log('changed!')
    })
  }

  componentDidMount() {
    searchCow.getAllCow()
    .then(cow => {
      console.log(cow.data)
      this.setState({
        cows: cow.data
      })
    })
    .catch(err => res.json({msg: 'can not mount data'}))
  }

  handleCowClick(e) {
    e.preventDefault();
    console.log('clicked! : ', e.target.innerHTML);
    if(e.target.innerHTML === this.state.selectedCow.name) {
      this.setState({
        selectedCow: {
          id: 0,
          name: '',
          description: ''
        }
      })
    } else {
      this.state.cows.forEach(cow => {
        if(e.target.innerHTML === cow.name) {
          this.setState({
            selectedCow: cow
          })
        }
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Cow List</h1>
        <div className='add-cow'>
          <CowAdd handleSubmit={this.handleSubmit}/>
        </div>
        <div className='cow-chosen'>
          <CowChosen selectedCow={this.state.selectedCow}/>
        </div>
        <div className='show-cow-list'>
          <CowList
            cows={this.state.cows}
            handleCowClick={this.handleCowClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
