import {Route, Switch} from 'react-router-dom'

import Home from './Component/Home'
import Courses from './Component/Courses'
import Notfound from './Component/Notfound'
import './App.css'

const App = () => {
  ;<div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/course/:id" component={Courses} />
      <Route component={Notfound} />
    </Switch>
  </div>
}

export default App
