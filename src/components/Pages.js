import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Pages.scss';

import ContactPage from './Pages/ContactPage';
import NewsPage from './Pages/NewsPage';
import AboutPage from './Pages/AboutPage';
import TopPage from './Pages/TopPage';
import PageNotFoundPage from './Pages/PageNotFoundPage';
import NewsDetail from './NewsDetail';

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
