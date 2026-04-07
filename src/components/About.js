import React from "react";
import User from "./User";
import UserClass from "./UserClass";
// const About = () =>{
//     return(
//         <div>
//             This is About us page!
//             <User name={"Sanjay(function component)"} />
//             <UserClass name={"Sanjay(Class component)"} location={"Bengaluru(Class )"} />
//         </div>
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent construcor")
    }
    componentDidMount(){
       console.log("compoenent did mount parent component!");
    //  this.timers =   setInterval(()=>{
    //             console.log("Namaste React")
    //     },1000)
    }

    componentWillUnmount(){
        // clearInterval(this.timers);
    }
    render(){
        console.log("parent render!")
        return(
                    <div>
                        This is About us page!
                        {/* <User name={"Sanjay(function component)"} /> */}
                        <UserClass name={"Sanjay(Class component)"} location={"Bengaluru(Class )"} />
                        {/* <UserClass name={"Elon(Class component)"} location={"USA(Class )"} /> */}

                    </div>
                )
    }
}

export default About;