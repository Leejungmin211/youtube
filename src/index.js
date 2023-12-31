import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import './index.css';
import Videos from "./pages/Videos";
import NotFound from "./pages/NotFound";
import VideosDetail from "./pages/VideosDetail";
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
    {index: true, element: <Videos />},
    {path: '/videos', element: <Videos />},
    {path: '/videos/:keyword', element: <Videos />},
    {path: '/videos/watch/:videosId', element: <VideosDetail />},
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
