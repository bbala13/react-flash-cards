import React,{Component} from 'react';
import './App.css';

import QuizBar from './components/QuizBar';

class App extends Component{
  constructor(){
    super();
    this.state={
        cardStyle:'Random',
    }
    
  }

  //updates state: cardStyle
  userChoice = (userChoice)=>{
    console.log(this.state.cardStyle);
    this.setState({
      cardStyle:userChoice
    })
  }

  render(){
    return (
      <div className="App">
        <QuizBar userChoice={this.userChoice}/>
        
      </div>
    );

  }
  
}

export default App;
