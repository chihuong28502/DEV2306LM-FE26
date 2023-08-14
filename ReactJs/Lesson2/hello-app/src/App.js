import logo from './logo.png';
import './App.css';
import JSXExpression from './components/JSXExpression';
import FuncCompDemo from './components/FuncCompDemo';
import ClassCompDemo from './components/ClassCompDemo';
import Header from './components/Header';
var listNav = ['Home','Top','Bottom','Outwear','Sale','ACCESSORIES','About us']

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="" alt="logo" />
        <h1>Thư viện ReactJs</h1>
        <h2>JSX Expression</h2>
      </header> */}
      
      
      <Header 
        text = {
          listNav.map(item =>
            <li style={{listStyle:'none'}} className="header-nav-item">
              {item}
            </li>
          )
          
        }
      />

      {/* <JSXExpression  />

      <FuncCompDemo 
        name = 'function Component'
      />
      <ClassCompDemo 
        userName = 'Class Component'
      /> */}
    </div>
  );
}

export default App;
