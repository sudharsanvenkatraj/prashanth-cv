import Router from './AppRouter';
import { RouterProvider } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
