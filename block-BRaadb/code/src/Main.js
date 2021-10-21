import { Route, Switch } from 'react-router-dom';
import Article from './Article';
import EnhancedArticles from './Articles';
import EnhancedBooks from './Books';
import EnhancedPeople from './People';
import Help from './Help';
import Home from './Home';
import NotFound from './NotFound';
import People from './People';

function Main() {
  return (
    <div className='page-content'>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/help'>
          <Help />
        </Route>
        <Route path='/articles' exact>
          <EnhancedArticles />
        </Route>
        <Route path='/people'>
          <EnhancedPeople />
        </Route>
        <Route path='/books'>
          <EnhancedBooks />
        </Route>
        <Route path='/articles/:slug'>
          <Article />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
