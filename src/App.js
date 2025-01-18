import React, { lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

const AppLayout = () =>{

    const [userName, setUserName] = useState();

    //authentication
    useEffect(()=>{
        //make api call
        const data = {
            name:"",
        };
        setUserName(data.name);
    },[]);
    
    return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
       <div>
            <Header/>
            <Outlet />
       </div> 
    </UserContext.Provider>
    </Provider>    
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path:"/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...!</h1>}><About /></Suspense>
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading...!</h1>}><Grocery /></Suspense>
            },
            {
                path: "/resturants/:resId",
                element: <ResturantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />,
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);