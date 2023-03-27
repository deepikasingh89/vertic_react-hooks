import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import NewCounter from './NewCounter';
import UserInfo from './UserInfo';
import NewUserInfo from './NewUserInfo';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <Layout/>
      {/* <UserInfo/> */}
      {/* <NewUserInfo/> */}
      {/* <Counter/> */}
      {/* <NewCounter/> */}
       {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      // </header> */}
    </div>
  );
}

export default App;
