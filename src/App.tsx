import Navbar from './components/navbar/navbar';

import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Exclusions from './pages/exclusions';
import Regulations from './pages/regulations';
import News from './pages/news';
import Map from './pages/map';
import Footer from './components/footer/footer';
import { Divider } from '@nextui-org/react';

const router = createHashRouter([
  {
    path: "/",
    element: <Home route="#" />,
  },
  {
    path: "/about",
    element: <About route="#/about" />,
  },
  {
    path: "/regulations",
    element: <Regulations route="#/regulations" />,
  },
  {
    path: "/exclusions",
    element: <Exclusions route="#/exclusions" />,
  },
  {
    path: "/news",
    element: <News route="#/news" />,
  },
  {
    path: "/map",
    element: <Map route="#/map" />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <div className='w-full flex flex-col justify-center items-center' style={{ minHeight: "calc(100vh - 4rem)" }}>
        <div className='grow flex flex-col justify-center items-center w-full py-4'>
          <RouterProvider router={router} />
        </div>
        <Divider className="my-2 w-11/12 light:bg-foreground-300 dark:bg-foreground-200" />
        <Footer />
      </div>
    </>
  )
}

export default App
