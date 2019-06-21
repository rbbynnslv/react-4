import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from "./components/ClassList/ClassList";
import Student from "./components/Student/Student";

export default function Routes() {
    return(
        <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={About} path="/about" />
            <Route path="/classlist/:class" component={ClassList} />
            <Route path="/student/:id" component={Student} />
        </Switch>
    );
}