import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import PhoneBook from './components/phoneBook/PhoneBook';
import AboutMePage from './pages/AboutMePage';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MusicPage from './pages/MusicPage';
import RelaxPage from './pages/RelaxPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/phonebook',
    element: <PhoneBook />,
  },
  {
    path: '/aboutme',
    element: <AboutMePage />,
  },
  {
    path: '/music',
    element: <MusicPage />,
  },
  {
    path: '/relax',
    element: <RelaxPage />,
  },
  {
    path: '/jobs',
    element: <JobsPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
