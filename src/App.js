import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import ListUsers from "./components/listUsers/ListUsers";

function App() {
  return (
      <Router>
          <div>
              <Link to={'/users'}>users</Link>
              <Route path={'/users'} component={ListUsers}/>
          </div>
      </Router>
  );
}

export default App;
