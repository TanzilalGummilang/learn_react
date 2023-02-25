import logo from './logo.svg';
import './App.css';
import MyButton from './component/MyButton';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. okeoke
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton></MyButton>
      <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
