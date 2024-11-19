//import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import Home from './components/Home';
//import publicpic from "../public/publicpic.jpeg"
 import financepic from "./financepic.jpeg"
// import myImage from './financepic.jpeg';

// const MyComponent = () => (
//   <div style={{ backgroundImage: `url(${myImage})` }} />
// );

function App() {
  return (
    <div className="App">
      {/* <img src={financepic}/> */}
      <Home/>
      <Registration/>
    </div>
  );
}

export default App;
