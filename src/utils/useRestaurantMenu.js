import { useEffect, useState } from "react"

const useRestaurantMenu = () =>{
    const [menu,setMenu] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData =async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9405997&lng=77.5737633&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        console.log(json,"jnson value<<")
        setMenu(json);


    }
    return menu;
    
}

export default useRestaurantMenu