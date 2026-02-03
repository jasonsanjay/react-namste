import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id:"heading"},"Namste React");
// //heading can be written in jxs
// // const jsxHeading = <h1 id="heading">Namste React from JSX</h1>
// //if we write this code in multiple lines we need to wrap with ()
// const jsxHeading = ( <h1 className="heading">
//     Namste React in 
// </h1>
// );
// console.log(heading) //object
// console.log(jsxHeading) //object




//functional Component

const HeaderComponent = () => (
    <div className="conatiner">
        {title1}
        <Title />
             <h1 className="header">Namste React from functional Component</h1>
    </div>
);
const title1 = (
    <h1>Here  is the title</h1>
)


const Title = () => (
    <h1 className="head">
        Namaste React using jsx
    </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeaderComponent />)

