import { BrowserRouter as Router, Route} from 'react-router-dom';
import pages from './components/pages';

function App() {
  return (
    <div className="App">
      <Router>
        {pages.map(page => <Route exact path={page.path} component={page.component} />)}
      </Router>
    </div>
  );
}

export default App;