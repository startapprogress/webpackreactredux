import React from 'react'
import {render} from 'react-dom'
import {Provider} from "react-redux";
import Store from "./stateManagment/Store";
import {BrowserRouter} from "react-router-dom";
import {Route} from 'react-router'
import Routes from "./components/Routes";

render(
    <Provider store={Store}>
    <BrowserRouter >
        {
            Routes.map((route)=>(
                <Route {...route}/>
            ))
        }
    </BrowserRouter>
</Provider>,document.getElementById("root"));