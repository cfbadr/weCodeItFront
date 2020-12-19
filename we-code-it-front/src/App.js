import logo from './logo.svg';
import './App.css';
import Login from './pages/login'
import SignIn from './pages/signIn'
import Main from './pages/main'
import Main2 from './pages/main2'
import NewProject from './pages/newProject'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<Route exact path="/" component={Login} />
			<Route exact path="/signIn" component={SignIn} />
			<Route exact path="/main" component={Main} />
			<Route exact path="/main2" component={Main2} />
			<Route exact path="/newproject" component={NewProject} />
		</BrowserRouter>
    </div>
  );
}

export default App;
