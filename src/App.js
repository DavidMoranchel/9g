import logo from "./logo.svg";
import "./App.css";

// Components
// import ConditionalRendering from "./components/ConditionalRendering";
// import Koders from "./components/Koders";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ConditionalRendering /> */}
        {/* <Koders /> */}
        <Form />
      </header>
    </div>
  );
}

export default App;
