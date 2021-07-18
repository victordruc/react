import React from 'react'

class App extends React.Component {

constructor() {
  super()
  this.clickHandle = this.clickHandle.bind(this);
  // in cazut nostru pentru o simpla apelare a metodei clickHandle() fare utilizarea this ca callback ar fi posipibil fara de apelat constructorul
}

// varianta 1 
clickHandle() {
  console.log("btn clicked")
}

// varianta 2
// clickHandle = () => {
//   console.log("btn clicked")
// }

  render() {
    return <button onClick={this.clickHandle}> Click </button>
  }
}

export default App;