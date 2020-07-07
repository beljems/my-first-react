import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios';

import './Header.scss';

const Header = () => {
    const [joke, setJoke] = useState('');

    useEffect(async () => {
        let res = await axios({
            method: 'GET',
            url: 'https://api.chucknorris.io/jokes/random'
        })

        setJoke(res.data.value);
    }, [])


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
                {joke}
            </h1>
        </header>
    )
}

export default Header;
