import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser';
import Home from './Components/Home';

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element: <Home/>
    },
    {
      path : '/users/add',
      element: <AddUser/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
