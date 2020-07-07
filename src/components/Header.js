import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getCategories() {
            let res = await axios({
                method: 'GET',
                url: 'https://api.chucknorris.io/jokes/categories'
            })

            setCategories(res.data);
        }

        getCategories();
    }, []);

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
                    <Route path="/news/:title">
                        News
                    </Route>
                    {categories.map((category) => (
                        <Route key={category} path={`/jokes/${category}`}>
                            {category}
                        </Route>
                    ))}
                    <Route path="/news">
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
