import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import RestaurantCategory from "./ResturantCategory";

const ResturantMenu = () => {
    const { resId } = useParams();
    const resInfo = useResturantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const { name, sla, labels } = resInfo?.cards[2]?.card?.card?.info;
    console.log("menu display", resInfo?.cards[2]?.card?.card?.info);
    console.log("res menu ", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => 
        (c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
         c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
    );
    console.log("updated res menu ",categories);

    return (
        <div className="p-6 bg-gray-50 shadow-lg rounded-lg max-w-4xl mx-auto mt-8">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-3">{name}</h1>
            <h4 className="text-xl text-gray-600 mb-2">{labels[1].message}</h4>
            <h4 className="text-lg text-gray-500 mb-6">{sla.slaString}</h4>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Menu</h2>
            {/*catogeries acordian*/}
            {categories.map((catogory,index)=> (
                <div key={index}>
                    <RestaurantCategory key={index} data={catogory?.card?.card} />
                </div>
            ))}
        </div>
    )
}

export default ResturantMenu;
