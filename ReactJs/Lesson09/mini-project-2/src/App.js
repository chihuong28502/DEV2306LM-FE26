import "./App.css";
import ListProduct from "./components/ListProduct";
import Title from "./components/Title";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      <div className="row">
        {/* LIST PRODUCT : START */}
        <ListProduct />
        {/* LIST PRODUCT : END */}
        {/* CART : START */}
        <Cart />
        {/* CART : END */}
      </div>
    </div>
  );
}

export default App;
