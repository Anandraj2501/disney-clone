import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Details';


function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Login />}></Route>

          <Route path='/home' exact element={<Home />}></Route>

          <Route path="/detail/:id" exact element={<Detail/>}>
            
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
