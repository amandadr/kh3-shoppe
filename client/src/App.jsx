import logo from "./logo.svg";
import "./App.css";
import HomeRoute from "./routes/HomeRoute";

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to the Kingdom Hearts Shop</p>
      </header>
      <HomeRoute />
    </>
  );
}

export default App;
