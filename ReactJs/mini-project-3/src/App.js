import Control from "./components/Control";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div className="container">
      <Header />
      <Control />
      <div className="row">
        <Form />
      </div>
      <List />
    </div>
  );
}

export default App;
