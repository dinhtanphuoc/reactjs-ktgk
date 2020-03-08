import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { TrangChu, GioiThieu } from 'src/components/pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TrangChu} />
        <Route path="/gioi-thieu" component={GioiThieu} />
      </Switch>
    </Router>
  );
}

export default App;
