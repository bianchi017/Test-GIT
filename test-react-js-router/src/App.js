import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PlanetContainer from './containers/PlanetContainer';
import StarshipContainer from './containers/StarshipContainer';

const App = () =>
  (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/planets'>Planetas</Link>
              </li>
              <li>
                <Link to='/starships'>Naves</Link>
              </li>
            </ul>
          </nav>

            <Switch>
              <Route path='/planets'>
                <PlanetContainer />
              </Route>
              <Route path='/starships'>
                <StarshipContainer />
              </Route>
            </Switch>
        </div>
      </Router>
  );

export default App;
