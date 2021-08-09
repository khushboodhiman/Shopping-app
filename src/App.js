import './App.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import All from './Pages/All';
import Women from './Pages/Women';
import Men from './Pages/Men';
import Kids from './Pages/Kids';
// import ItemCard from './Components/ItemCard';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>

      <Switch>
        <Route path="/all">
          <All/>
        </Route>

        <Route path="/women">
          <Women/>
        </Route>

        <Route path="/men">
          <Men/>
        </Route>

        <Route path="/kids">
          <Kids/>
        </Route>

        <Route path="/">
          <All/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
