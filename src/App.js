import React, {Suspense} from 'react'
// import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <>
<Suspense fallback={null}>
          <Switch>
            {routes.map(route =>
                <Route key={route.label} {...route} />
             
            )}
            {/* <Route component={NotFound} /> */}
          </Switch>
   </Suspense>
   </>
  )
}

// App.propTypes = {

// }

export default App

