import './App.css';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Home from './Pages/Home';
import Page404 from './Containers/Page404';
import ThemeContext from './theme-context';
import { useState } from 'react';
import Category from './Pages/Category';
import About from './Pages/About';

//REDUX
import { Provider } from 'react-redux';
import store from './Redux/store'
let pages = [
  { path: '/', component: <Home />, exact: true },
  { path: '/mobileapps', component: <About />, },
  { path: '/:category', component: <Category />, },
  { component: <Redirect to='/' /> },
]


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          {pages.map(page => {
            return <Route path={page.path} exact={page.exact} key={page.path}>
              {page.component}
            </Route>
          })}
        </Switch>
      </div>
    </Provider>

  );
}

export default App;
