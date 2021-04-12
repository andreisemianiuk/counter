import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Error404 from './Error404'
import COUNTER_1 from './Counter_1/COUNTER_1'
import COUNTER_2 from './Counter_2/COUNTER_2'

export const PATH = {
  COUNTER_1: '/counter_1',
  COUNTER_2: '/counter_2',
}

function Routes() {
  return (
    <div>
      <Switch>
        <Route path={'/'} exact render={() => <Redirect to={PATH.COUNTER_1}/>}/>
        <Route path={PATH.COUNTER_1} render={() => <COUNTER_1/>}/>
        <Route path={PATH.COUNTER_2} render={() => <COUNTER_2 />}/><Route render={() => <Error404/>}/>
      </Switch>
    </div>
  )
}

export default Routes
