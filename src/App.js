import React from 'react';
import './App.css';
import imgSrc from './sidoux.jpg';
class App extends React.Component {
  state = {
    Person: {
      FullName: 'Marwa Bejaoui',
      BIO: 'hi',
      Profession: 'web devlopeur',
    },
    show: false
  }
  
  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <div className="App" style={{ height: '100vh',
        backgroundColor: 'rgb(242, 215, 213) '
      }}>
        <h1>Hi</h1>
        <img Src={imgSrc} width="300" height="400" alt="sidoux.jpg" />
      
        <button onClick={this.handleShow} >show</button>
        {
          this.state.show === true ? <div>
            <p> {this.state.Person.imgSrc}</p>
            <p>{this.state.Person.FullName}</p>
            <p>{this.state.Person.Profession}</p>
          </div> : null
        }
  

      
      </div>
    );
  }
}
export default App;
