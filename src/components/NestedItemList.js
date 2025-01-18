import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const NestedItemList = ({items}) => {
   //const {item} = props;
   console.log("item2",items);
   //const datas = item.categories;
   //const allItems = datas.map(obj => obj.itemCards);
   //const data = allItems.flat();

   const dispatch = useDispatch();

  const handelAddItem = (dish) =>{
    // dispatch an action
    dispatch(addItem(dish));

  };

   return (
    <ul className="space-y-6">
      {items.map((dish) => (
        <li
          key={dish.card.info.id}
          className="flex justify-between items-center border-b border-gray-100 pb-6"
        >
          <div className="flex-1 pr-4">
            <span className="block text-lg font-semibold text-gray-800">
              {dish.card.info.name}
            </span>
            <span className="text-sm text-gray-700">
              ₹ {dish.card.info.price / 100 || dish.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs text-gray-500 mt-1">{dish.card.info.description}</p>
          </div>

          {/* Image and Button Container */}
          <div className="relative w-48 h-40">
            <img
              className="w-full h-full object-cover rounded-md"
              alt={dish.card.info.name}
              src={`${CDN_URL}${dish.card.info.imageId}`}
            />
            <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-green-600 font-bold text-xl px-6 py-2 rounded-xl border border-green-600 shadow-lg hover:bg-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
            onClick ={()=>handelAddItem(dish)}
            >
              ADD
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NestedItemList;
