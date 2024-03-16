import Router from './AppRouter';
import { RouterProvider } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={Router}></RouterProvider>
      <Footer />
    </div>
  );
}

export default App;
