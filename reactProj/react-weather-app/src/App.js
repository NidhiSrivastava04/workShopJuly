import React, { Component } from 'react'
import './App.css';
class App extends Component{
  state = { 
    city: "Delhi",
    temp: 0,
    country: 'IN',
    visible: false
  }
  componentDidMount(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=noida&appid=07e7dc0f61902aace3cea84d8cf25cce&units=metric')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      this.setState({city: data.name, temp: Math.round(data.main.temp), country: data.sys.country, visible: true})
    })
  }
  render(){
    return(
      // <h1>Weather App</h1>
      // <h2 style="color:black;justify-content: center; display: flex; margin-bottom: -33px;">Weather App</h2>
        <div className="card col-4 mx-auto my-5 bg-image ">
          <div className="card-body">
            <h5 className="card-title text-white">{this.state.visible ? this.state.city : 'Loading....'}</h5>
            <h6 className="card-subtitle mb-2">{this.state.country}</h6>
            <h1 className="text-white">{this.state.temp}&#176;C</h1>
          </div>
        </div>
    );
  }
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Weather App</h1>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;
