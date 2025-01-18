import ResturantCard, {withFreeDeliveryLabel} from "./ResturantCard";
import { useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body =()=>{
    
    const [listOfResturant, setlistOfResturant] = useState([]);
    const [filterResturant, setfilterResturant] = useState([]);
    const [searchtxt, setSearchtxt]= useState("");

    const ResturantCardFreeDelivery = withFreeDeliveryLabel(ResturantCard);
    console.log("List Of filter Resturant", filterResturant);
    
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.508238000000013&lng=77.3653117&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        // optional chaining
        setlistOfResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilterResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
    //conditional Rendering
    /*
    if(listOfResturant.length === 0){
        return <Shimmer />;
    }
    */
    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false) 
        return (
        <h1>Opps! you are offline..! connect to internet.</h1>
    );

    const {loggedInUser,setUserName} = useContext(UserContext);

      return listOfResturant.length === 0 ? <Shimmer /> : (
        <div>
            <div className="flex items-center justify-center space-x-3 p-6 "> 
                <div>
                <input type="text" className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none w-64 text-gray-700 placeholder-gray-400" placeholder="What's on your mind?"
                        value={searchtxt} 
                        onChange={(e)=>{
                            setSearchtxt(e.target.value)
                        }}/>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                        onClick={()=>{
                            // filter the resturant card and update the UI
                            // search text
                            console.log(searchtxt);
                            const filteredResturant=listOfResturant.filter(
                                (res)=>res.info.cuisines.join(" , ").toLowerCase().includes(searchtxt.toLowerCase())
                            );
                            setfilterResturant(filteredResturant);
                        }}
                    >Search</button>
                </div> 
                <div>
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold px-6 py-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                    onClick={() => {
                        // filter logic
                        const filteredResturant = listOfResturant.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setfilterResturant(filteredResturant);
                        }}
                >Top Rated Resturant </button>
                </div>
                <div>
                <input type="text" className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none w-64 text-gray-700 placeholder-gray-400" placeholder="What's your user name?"
                        value={loggedInUser} 
                        onChange={(e)=>{
                            setUserName(e.target.value)
                        }}/>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                   {filterResturant.map((resturant) => (
                         <Link className="block" key={resturant.info.id} to={`/resturants/${resturant.info.id}`}>
                           {
                           resturant?.info.id%2 ==0 ?(<ResturantCardFreeDelivery resData={resturant} />):(<ResturantCard resData={resturant} />)
                           }
                         </Link>
                    ))}  
            </div>

        </div>
    )
} 
export default Body;