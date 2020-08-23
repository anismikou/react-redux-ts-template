import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Error from '../Error'

const App: FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <h1>Hello World!</h1>
                    <p>How are you ?</p>
                </Route>
                <Route>
                    <Error title="404">
                        The requested URL was not found on the server
                    </Error>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
