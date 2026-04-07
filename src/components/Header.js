import { LOGO } from "../utils/constants";
import { useEffect, useState ,Link} from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

 const Header = () =>{
    const [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    useEffect(()=>{
        console.log("useEffect Called !")
    },[btnName])

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO} />   
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                         status : {onlineStatus ? 'Online😁 ' : 'Offline😢' }
                    </li>
                    <li>
                       <Link to="/">Home</Link> </li>
                    <li>
                      <Link to="/about">  About Us </Link></li>
                    <li>
                      <Link to="/contact">  Contact Us</Link>
                       </li>
                    <li>Cart</li>
                    {/* <li> */}
                        <button className="login" onClick={()=>{
                           btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}
                        >{btnName}</button>
                    {/* </li> */}
                </ul>
            </div>
        </div>
    )
}

 export default Header