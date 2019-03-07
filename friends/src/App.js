import React from "react";
import FreindsList from "./components/FriendsList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/friends-list'>friends</Link>
          </nav>
          <Route to='/login' component={Login} />
          <PrivateRoute to='/friends-list' component={FreindsList} />
        </div>
      </Router>
    );
  }
}

export default App;
