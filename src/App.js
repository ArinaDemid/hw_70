import React from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from './components/Layout/Layout';
import TVShowInput from './containers/TVShowInput/TVShowInput';
import ShowMovie from './components/ShowMovie/ShowMovie';

const App = () => (
    <Layout>
      <Switch>
        <Route path="/" exact component={TVShowInput} />
        <Route path="/shows/:id" exact component={ShowMovie}/>
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </Layout>
);

export default App;
