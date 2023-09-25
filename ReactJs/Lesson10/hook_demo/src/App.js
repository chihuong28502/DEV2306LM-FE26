import ContentUseCallback from "./component/ContentUseCallback";
import ContextAndUseContext from "./component/ContextAndUseContext";
import DemoUseCallback from "./component/DemoUseCallback";
import DemoUseEffect from "./component/DemoUseEffect";
import DemoUseState from "./component/DemoUseState";
import ListCategories from "./component/ListCategories";

function App() {
  return (
    <div className="container">
      {/* <DemoUseState />
      <hr />
      <DemoUseEffect />
      <hr />
      <ContextAndUseContext />
      <hr />
      <ContentUseCallback /> */}
      <ListCategories />
    </div>
  );
}

export default App;
