import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import NotFound from "./views/NotFound";
import Hub from "./views/Hub";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Signup from "./views/Signup";

const router = createBrowserRouter(  [
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',  
                element: <Navigate to="/dashboard" />
            },  
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/hub',
                element: <Hub />
            }
            
        ]
    },    
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login', 
                element: <Login />  
            },
            {
                path: '/signup', 
                element: <Signup />  
            },
        ]
    },   
   
{
    path: '*',
    element: <NotFound />
}
])  

export default router