import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Pages/Login/Login";
import Card from "./components/Pages/Card/Cards";
import Detail from "./components/Pages/Detail/Detail";

import PrivateRoute from "./helpers/PrivateRoute.jsx";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>

                <PrivateRoute exact path="/pokemons">
                    <Card />
                </PrivateRoute>

                <PrivateRoute exact path="/pokemons/:name">
                    <Detail />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

export default App;