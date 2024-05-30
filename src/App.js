import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import MusicPage from "./pages/MusicPage";
import PhoneBook from "./components/phoneBook/PhoneBook";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // loader: rootLoader,
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
    path: "/home",
    element: <HomePage />,
    // loader: teamLoader,
  },
  {
    path: "/phonebook",
    element: <PhoneBook />,
    // loader: teamLoader,
  },
  {
    path: "/aboutme",
    element: <AboutMePage />,
    // loader: teamLoader,
  },
  {
    path: "/music",
    element: <MusicPage />,
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
