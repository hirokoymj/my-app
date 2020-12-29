import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>This is the test page between React app and Heroku.</h3>
        <h3>This is the test page between my github repo and Heroku.</h3>
        <h3>by HY</h3>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
