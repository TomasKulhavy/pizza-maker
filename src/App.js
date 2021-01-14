import './App.css';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import Ingredients from "./Components/Ingredients";
import Calzone from "./Components/Calzone";
import Home from "./Components/Home";
import Pizza from "./Components/Pizza";
import NotFound from "./Components/NotFound";
import { IngredientsProvider } from "./Providers/IngredientsContext";
import { createBrowserHistory } from "history";
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <IngredientsProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/order/pizza" component={Pizza} />
            <Route exact path="/order/calzone" component={Calzone} />
            <Route exact path="/ingredients" component={Ingredients} />
            <Route component={NotFound} status={404}/>
          </Switch>
        </Router>
      </IngredientsProvider>
    </div>
  );
}

export default App;