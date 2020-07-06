import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Pages.scss';

import ContactPage from './ContactPage';
import NewsPage from './NewsPage';
import AboutPage from './AboutPage';
import TopPage from './TopPage';
import PageNotFoundPage from './PageNotFoundPage';
import NewsDetail from './../components/NewsDetail';

const Pages = () => {
  return (
    <div className="pages">
        <Switch>
            <Route path="/contact">
                <ContactPage />
            </Route>
            <Route path="/about">
                <AboutPage />
            </Route>
            <Route path="/news" exact>
                <NewsPage />
            </Route>
            <Route path="/news/:title">
              <NewsDetail />
            </Route>
            <Route path="/" exact>
                <TopPage />
            </Route>
            <Route path="*">
                <PageNotFoundPage />
                {/*<Redirect path="/" />*/}
            </Route>
        </Switch>
    </div>
  )
}

export default Pages;
