import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './app/store';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';
import Phrases from "./pages/phrases";
import NewPhrase from "./pages/new-phrase";
import Lessons from "./pages/lessons";
import LessonsItems from './pages/lessonsItems';
import Lesson from './pages/lesson';
import {QueryClient, QueryClientProvider } from 'react-query';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Phrases/>,
    },
    {
        path: "/new-phrase",
        element: <NewPhrase/>,
    },
    {
        path: "/lessons",
        element: <Lessons/>,
    },
    {
        path: "/lessons/:id",
        element: <LessonsItems/>,
    },
    {
        path: "/lessons/:playlist/:lesson",
        element: <Lesson/>,
    }
]);

const queryClient = new QueryClient()

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </React.StrictMode>
);


reportWebVitals();
