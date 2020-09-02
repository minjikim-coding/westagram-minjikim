//컴포넌트 구현하기
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/main/Main'


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
    )
  }
}

class Login extends React.Component {

    goToSignup() {
      this.props.history.push('/signup');
    }
  

export default Routes;