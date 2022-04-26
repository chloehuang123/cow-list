import React from 'react';

class CowAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
    };
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleDesChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.name, this.state.description);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <div>
            <label>Name: </label>
            <input
              type='text'
              onChange={this.handleNameChange.bind(this)}
            ></input>
            <label>Description: </label>
            <input
              type='text'
              onChange={this.handleDesChange.bind(this)}
            ></input>
            <input type='submit' value='Add'></input>
          </div>
        </form>
      </div>
    );
  }
}

export default CowAdd;
