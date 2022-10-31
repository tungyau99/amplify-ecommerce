import React from "react";

import Home from "./component/Home";
import Test from "./component/Test";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Routing = () => {
    <Router>
        <Routes>
            <Route exact path="/" component={Home} />
            
            <Route path="/test" component={Test} />
        </Routes>
    </Router>
}

export default Routing;