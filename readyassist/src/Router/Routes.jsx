import React from 'react'
import { Route, Switch } from "react-router-dom"
import DashBoard from '../Components/DashBoard'
import Edit from "./Edit"


function Routes() {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => <DashBoard />} />
                <Route path="/edit/:id" exact render={(props) => <Edit {...props} />} />
                <Route render={() => <div>Error:404 page not found</div>} />
            </Switch>
        </>
    )
}
export { Routes }