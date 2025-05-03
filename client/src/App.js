import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import User from './component/getUser/user';
import Add from './component/addUser/add';
import Edit from './component/updateUser/Edit';

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<User/>,
    },
    {
      path:"/add",
      element:<Add/>,
    },
    {
      path:"/edit/:id",
      element:<Edit/>,
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
