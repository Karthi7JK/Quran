import Dashboard from './components/dashboard/Dashboard';
import { useRoutes } from 'react-router-dom';
import Chapters from './components/chapters/Chapters';

export function RouteConfig() {
  let config = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "dashboard", element: <Dashboard /> },
    { path: "chapters", element: <Chapters /> },
  ]);
  return config;
} 
  


