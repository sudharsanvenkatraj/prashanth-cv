import {createBrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Layout from './components/Layout';

const Router =  createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/aboutme',
        Component: Aboutme 
      },
      {
        path: '/projects',
        Component: Projects
      },
      {
        path: '/certificates',
        Component: Certificates
      }
    ],
  },
 

])

export default Router