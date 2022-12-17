import './App.css';
//import "./Head_Display.css"
import Header from './Header';
//import img1 from '../src/navimages/logo.jpg';
import Home from './Home';
import Login from './Login';
import Product from './Product';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
     {/*<h1 style={{background:"white",border: "2px solid",class:"card col-3 border-success"}}>WELCOME TO REACT SPA DEVELOPMENT</h1>*/}
      <table>
       <BrowserRouter>
        <Nav/>
          <Routes>
            {/* For each compoennt define the route 
            <Route path='/' element={App} ></Route>*/}
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
          </Routes>
        </BrowserRouter>
        </table>
      </header>
    </div>
  );
}



export default App;
