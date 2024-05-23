import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhoneBook from "./components/phoneBook/PhoneBook";
import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // loader: rootLoader,
    children: [
      {
        path: "/phonebook",
        element: <PhoneBook />,
        // loader: teamLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <Navs /> */}
    </div>
  );
}

export default App;
