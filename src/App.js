import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './Componets/Layout/Layout';
import Signin from './Views/Forms/Signin/Signin';
import Signup from './Views/Forms/Signup/Signup';

function App() {
  return (
    <Switch>
      <Route path="/signin" strict={true} component={Signin} />
      <Route path="/signup" strict={true} component={Signup} />
      <Route path="/" strict={true} render={props => <Layout {...props} />} />
    </Switch>
  );
}

export default App;
