import {restaurantImage } from './utils/constants'
const RestaurantCard = (props) =>{
    const { name , cuisines,avgRating} = props.resData
    return(
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img alt="res-logo" className="res-logo"
            src= {restaurantImage}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>

        </div>
    )
}

export default RestaurantCard;
