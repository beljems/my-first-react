import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
        <h1>
            <Switch>
                <Route path="/contact">
                    Contact
                </Route>
                <Route path="/about">
                    About
                </Route>
                <Route path="/news" exact>
                    News
                </Route>
                <Route path="/news/:title">
                    News
                </Route>
                <Route path="/" exact>
                    Top
                </Route>
                <Route path="*">
                    404
                    {/*<Redirect path="/" />*/}
                </Route>
            </Switch>
        </h1>
    </header>
  )
}

export default Header;
