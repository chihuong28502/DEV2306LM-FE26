import CreateUser from "./components/CreateUser";
import ListCategory from "./components/ListCategory";
import ListUserSever from "./components/ListUserSever";
import ListUserLocal from "./components/ListUserSever";

function App() {
  return (
    <div className="container border">
      <div className="row">
        {/* <h1>api local</h1> */}
        {/* <ListUserLocal /> */}
      </div>
      <div className="row">
        <h1>API sever</h1>
        <ListUserSever />
      </div>
      <CreateUser />
      {/* <ListCategory /> */}
    </div>
  );
}

export default App;
