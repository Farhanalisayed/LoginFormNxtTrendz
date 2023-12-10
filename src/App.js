import {Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="the-container">
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App