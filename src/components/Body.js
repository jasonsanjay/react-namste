import RestaurantCard from "../RestaurantCard";
import { useState } from "react";


const Body = () => {
    let listOfRestaurantsinJs = [
        {
            data:{
                id:"1",
                name:"KFC",
                cuisines:["Burgers","Biryani","American","Snacks","FastFood"],
                costForTwo:4000,
                deleveryTime:36,
                avgRating:"3.8"
            }
        },
        {
            data:{
                id:"2",
                name:"Megana",
                cuisines:["Burgers","Biryani","American","Snacks","FastFood"],
                costForTwo:4000,
                deleveryTime:36,
                avgRating:"4.2"
            }
        }
    ]
    const [listOfRestaurants,setListOfRestaurants] = useState(listOfRestaurantsinJs);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    console.log("click event")
                    //write the filter logic
                    const filteredList = listOfRestaurants.filter((ele) => ele.data.avgRating > 4);
                    setListOfRestaurants(filteredList);
                    console.log(listOfRestaurants,"list od resto filtered");
                }} >Top rated restaurant</button>
            </div>
            <div className="res-container">
                { listOfRestaurants.map((resto)=>(
                    <RestaurantCard key={resto.data.id} resData = {resto}/>
                ))}
                {/* <RestaurantCard resName="Meghana foods" cuisine="Biryani ,North Indian,Asian"/>
                <RestaurantCard resName="KFC" cuisine="Fast Food,Burger" /> */}
               
                {/* restaurd cards */}
            </div>

        </div>
    )
}

export default Body