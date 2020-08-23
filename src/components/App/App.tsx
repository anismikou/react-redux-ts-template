import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Error from '../Error'

const App: FC = () => {
    const show = true
    return (
        <Router>
            <TransitionGroup>
                <Switch>
                    <Redirect exact from="/" to="/movies" />
                    <Route path="/movies">
                        <CSSTransition
                            key={1}
                            in={show}
                            classNames="example"
                            timeout={{ enter: 1000, exit: 1000 }}
                            appear
                            unmountOnExit
                            mountOnEnter>
                            <div className="content">ok</div>
                        </CSSTransition>
                    </Route>
                    <Route path="/shows">
                        <CSSTransition
                            key={2}
                            in={show}
                            classNames="example"
                            timeout={{ enter: 1000, exit: 1000 }}
                            appear
                            unmountOnExit
                            mountOnEnter>
                            <div className="content">ok</div>
                        </CSSTransition>
                    </Route>
                    <Route>
                        <Error key={5} message={'404'} />
                    </Route>
                </Switch>
            </TransitionGroup>
        </Router>
    )
}

export default App
