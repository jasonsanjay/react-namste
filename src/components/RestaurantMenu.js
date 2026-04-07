import { useEffect } from "react"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";


const RestaurantMenu = () =>{
    const {resId} = useParams();
    console.log(resId,"resid");
    useEffect(()=>{
        fetchData();
    },[])

    const data = useRestaurantMenu();
    console.log(data,"data<<<<")
    const fetchData = async () =>{
        // const data = await fetch(
        //     "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9405997&lng=77.5737633&restaurantId=405432&catalog_qa=undefined&submitAction=ENTER"
        // );
        // console.log(data,"data valeues")
        // const json = await data.json();
        // console.log(json,"json values<<")
    }
    return(
        <div className="Menu">
            <h1>Name of the Restaurant</h1>

            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet COke</li>
            </ul>
             </div>
    )
}


export default RestaurantMenu