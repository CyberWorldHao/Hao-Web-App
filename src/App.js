import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import PhoneBook from './components/phoneBook/PhoneBook';
import AboutMePage from './pages/AboutMePage';
import HomePage from './pages/HomePage';
import MusicPage from './pages/MusicPage';
import RelaxPage from './pages/RelaxPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    // loader: true/false,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "/phonebook",
    //     element: <PhoneBook />,
    //     // loader: teamLoader,
    //   },
    // ],
  },
  {
    path: '/home',
    element: <HomePage />,
    // loader: teamLoader,
  },
  {
    path: '/phonebook',
    element: <PhoneBook />,
    // loader: teamLoader,
  },
  {
    path: '/aboutme',
    element: <AboutMePage />,
    // loader: teamLoader,
  },
  {
    path: '/music',
    element: <MusicPage />,
    // loader: teamLoader,
  },
  {
    path: '/relax',
    element: <RelaxPage />,
    // loader: teamLoader,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <HomePage />
        <PhoneBook />
        <AboutMePage />
        <MusicPage />
      </RouterProvider>
    </div>
  );
}

export default App;
