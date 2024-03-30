import Navbar from './components/navbar/navbar';

import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Exclusions from './pages/exclusions';
import Regulations from './pages/regulations';
import News from './pages/news';
import Map from './pages/map';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/regulations",
    element: <Regulations />,
  },
  {
    path: "/exclusions",
    element: <Exclusions />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/map",
    element: <Map />,
  },
]);

function App() {

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
