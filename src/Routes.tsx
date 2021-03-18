import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Counter_1 from './Counter_1/Counter_1'
import Counter_2 from './Counter_2/Counter_2'
import Error404 from './Error404'

export const PATH = {
  COUNTER_1: '/counter_1',
  COUNTER_2: '/counter_2',
}

function Routes() {
  return (
    <div>
      <Switch>
        <Route path={'/'} exact render={() => <Redirect to={PATH.COUNTER_1}/>}/>
        <Route path={PATH.COUNTER_1} render={() => <Counter_1 />}/>
        <Route path={PATH.COUNTER_2} render={() => <Counter_2 />}/><Route render={() => <Error404/>}/>
      </Switch>
    </div>
  )
}

export default Routes
