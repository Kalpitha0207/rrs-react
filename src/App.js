import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './Componets/Layout/Layout';

function App() {
  return (
    <Switch>
      <Route path="/" strict={true} render={props => <Layout {...props} />} />
    </Switch>
  );
}

export default App;
