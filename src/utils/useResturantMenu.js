import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

// fetching the data (single responsibility)
const useResturantMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(MENU_API + resId.replace(":", ""));
        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo;
}

export default useResturantMenu;