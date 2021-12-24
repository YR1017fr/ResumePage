import './App.css';
import { Component } from 'react';
import Navigation from'./component/navigation/navigation';
import Content from './component/content/content';

class App extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return (
      <div className="App">
        <Navigation/>
        <Content/>
      </div>
    );
  }
}

export default App;
