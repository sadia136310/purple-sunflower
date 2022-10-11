import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';

import Home from './components/Home/Home';
import ShowDetails from './components/ShowDetails/ShowDetails';
import Main from './layouts/Main';


function App() {
  const router = createBrowserRouter([
 {path:'/',
 element: <Main></Main>,
 children:[

 
  {path: '/',
  loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
  element: <Home></Home>,
  },
  {path: '/home',
  loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
  element: <Home></Home>,
  },
  
  {
    path: '/data/:showId',
    loader: async({params})=>{
     return fetch(`https://openapi.programming-hero.com/api/quiz/${params.showId}`)
    }, 
    element:<ShowDetails></ShowDetails>
  },
  {
    path:'/blog',
    element:<Blog></Blog>
  }
  

 ]
  
 },
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
