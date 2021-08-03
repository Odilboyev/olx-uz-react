import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom'
import Home from './Pages/Home';
import Page404 from './Containers/Page404';
import ThemeContext from './theme-context';
import { useState } from 'react';
import Category from './Pages/Category';
import About from './Pages/About';


let pages = [
  { path: '/', component: <Home />, exact: true },
  { path: '/mobileapps', component: <About />, },
  { path: '/:category', component: <Category />, },
  { component: <Page404 /> },
]


function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App">
        <Switch>
          {pages.map(page => {
            return <Route path={page.path} exact={page.exact} key={page.path}>
              {page.component}
            </Route>
          })}
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
