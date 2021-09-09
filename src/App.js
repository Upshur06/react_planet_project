import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Mercury from './components/Mercury';
import Venus from './components/Venus';
import Earth from './components/Earth';
import Mars from './components/Mars';
import Jupiter from './components/Jupiter';
import Saturn from './components/Saturn';
import Uranus from './components/Uranus';
import Neptune from './components/Neptune';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path='/' component= {Mercury} />
          <Route exact path='/venus' component= {Venus} />
          <Route exact path='/earth' component= {Earth} />
          <Route exact path='/mars' component= {Mars} />
          <Route exact path='/jupiter' component= {Jupiter} />
          <Route exact path='/saturn' component= {Saturn} />
          <Route exact path='/uranus' component= {Uranus} />
          <Route exact path='/neptune' component= {Neptune} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
