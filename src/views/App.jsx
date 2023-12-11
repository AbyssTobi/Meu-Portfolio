import React from "react";
import "./App.css"
import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import { BrowserRouter as Route } from "react-router-dom"

const App = props => (
    <div className="App">
        <Route>
            <Menu />
            <Content />
        </Route>
    </div>
)

export default App