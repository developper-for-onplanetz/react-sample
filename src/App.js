import React, { Component } from 'react';

//class App extends Component {
//  render() {
//    return (
//    <React.Fragment>
//      <label htmlFor ="bar"></label>
//      <input type="text" onchange={() => {console.log("I am clicked")}} />
//    </React.Fragment>
//    )
//  }
//}

const App = () => {
  return (
   <div>
     <Cat />
     <Cat />
     <Cat />
   </div>
 )

}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
