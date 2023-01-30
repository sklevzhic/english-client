import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
    createBrowserRouter,
    RouterProvider,
    Link,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';
import Phrases from "./pages/phrases";
import NewPhrase from "./pages/new-phrase";

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Phrases />,
    },
    {
        path: "/new-phrase",
        element: <NewPhrase />,
    },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
