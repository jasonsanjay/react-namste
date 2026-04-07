import RestaurantCard from "../RestaurantCard";
import { useState,useEffect } from "react";

import useOnlineStatus from "../utils/useOnlineStatus";
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
    const [listOfRestaurants,setListOfRestaurants] = useState([]);

    const [filteredResto,setFilteredResto] = useState([]);

    const [search,setSearch] = useState("");
    useEffect(()=>{
        fetchData();

    },[])

    
    const fetchData = async() => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9405997&lng=77.5737633&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json= await data.json();
            setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
            setFilteredResto(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        }

        const onlineStatus = useOnlineStatus();
        console.log(onlineStatus,"<<<onlineStatus>>>")

        if(onlineStatus === false) return <h1>looks like you are offline please check the interent!</h1>
        

    return listOfRestaurants.length == 0 ? <div>Loading</div> : (
        
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text"className="search-box" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                    <button className="btn-search" onClick={()=>{
                        const searchList = listOfRestaurants.filter((ele) => ele.info.name.toLowerCase().includes(search.toLowerCase()))
                        setFilteredResto(searchList);
                    }} >search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    //write the filter logic
                    const filteredList = listOfRestaurants.filter((ele) => ele.data.avgRating > 4);
                    setFilteredResto(filteredList);
                }} >Top rated restaurant</button>
            </div>
            <div className="res-container">
                { filteredResto.map((resto,index)=>(
                    <RestaurantCard key={resto?.info?.id} resData = {resto?.info}/>
                ))}
                {/* <RestaurantCard resName="Meghana foods" cuisine="Biryani ,North Indian,Asian"/>
                <RestaurantCard resName="KFC" cuisine="Fast Food,Burger" /> */}
               
                {/* restaurd cards */}
            </div>

        </div>
    )
}

export default Body