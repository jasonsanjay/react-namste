import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter , RouterProvider,Outlet } from "react-router";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const About = lazy(()=> import('./components/About'))
const Applayout = () => {
    return(
        <Provider store={appStore}>
        <div className="app">
            <Header />
            {/* <Body /> */}
            <Outlet/>
            <Footer/>
        </div>
        </Provider>
    )
} 

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[{
            path:'/',
            element:<Body/>
        },
            
            {
            
                path:'/about',
                element: <Suspense fallback={<div>Loading!!!!!!</div>}><About/> </Suspense>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)

