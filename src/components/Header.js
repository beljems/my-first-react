import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    const [joke, setJoke] = useState('');

    useEffect(async () => {
        async function getJoke() {
            let res = await axios({
                method: 'GET',
                url: 'https://api.chucknorris.io/jokes/random'
            })

            setJoke(res.data.value);
        }

        getJoke();
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
                </Switch><br />
                {joke}
            </h1>
        </header>
    )
}

export default Header;
