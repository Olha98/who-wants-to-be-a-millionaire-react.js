import React from 'react'
// import PropTypes from 'prop-types'
import { Route, Router, Switch } from 'react-router-dom';
import routes from './assets/routes/routes';
import { v4 as uuidv4 } from "uuid";

const App = () => {

  return (


      
          <Switch>
            {routes.map((route) => (
              <Route key={uuidv4()}  {...route}>
                {route.component}
              </Route>
            ))}
           
          </Switch>
     
   

  )
}

// App.propTypes = {

// }

export default App

