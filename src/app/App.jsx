import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Users from './Users';
import Navbar from '@/components/Navbar component/Navbar';

const options = [
  { path: '/page', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/users', label: 'Users' },
];

function App() {
  return (
    <Router>
      <Navbar options={options} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
