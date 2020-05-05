import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './pages/routes';

const App = () => {

  const mappedRoutes = routes && routes.map(route => (
    <Route 
      key={route.id} 
      exact={route.exact} 
      path={route.path} 
      component={route.component} 
    />
  ));

  return (
    <>
      <Router>
        <Switch>
          {mappedRoutes}
        </Switch>
      </Router>
    </>
  );
};

export default App;
