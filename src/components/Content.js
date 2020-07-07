import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Content.scss';

import ContactContent from './../components/ContactContent';
import CategoryContent from './../components/CategoryContent';
import NewsContent from './../components/NewsContent';
import AboutContent from './../components/AboutContent';
import TopContent from './../components/TopContent';
import PageNotFoundContent from './../components/PageNotFoundContent';
import NewsDetail from './../components/NewsDetail';

const Content = () => {
    return (
        <div className="content">
            <Switch>
                <Route path="/contact">
                    <ContactContent />
                </Route>
                <Route path="/about">
                    <AboutContent />
                </Route>
                <Route path="/news/:title">
                    <NewsDetail />
                </Route>
                <Route path="/jokes/:category">
                    <CategoryContent />
                </Route>
                <Route path="/news">
                    <NewsContent />
                </Route>
                <Route path="/" exact>
                    <TopContent />
                </Route>
                <Route path="*">
                    <PageNotFoundContent />
                    {/*<Redirect to="/" />*/}
                </Route>
            </Switch>
        </div>
    )
}

export default Content;
