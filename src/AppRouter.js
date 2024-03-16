import {createBrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Certificates from './components/Certificates';

const Router =  createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/aboutme',
    element: <Aboutme />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/certificates',
    element: <Certificates />
  }

])

export default Router