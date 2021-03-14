import React, { useState, useEffect } from "react";
import LogoBR from './components/img/LogoBR.png';

const logoStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "3px",
    backgroundColor: "white",
    filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2))",
    position: "fixed",
    transition: "0.35s",
    top: "27px",
    left: "200px",
};

export default function Logo(props) {    
    const [mouseCoordinate, setMouseCoordinate] = useState("");
    const [contents, setContents] = useState([]);

    // const clickHandler = () => {
    //     setContents([...contents, text]);
    // }

    // const changeHandler = (e) => {
    //     setText(e.target.value)
    // }

    // useEffect(() => {
    //     document.getElementById('scrollableDiv').addEventListener('scroll', toggleFilterCollapse, {passive: true});
    //     return () => {
    //       document.getElementById('scrollableDiv').removeEventListener('scroll', toggleFilterCollapse)
    //     }
    //   }, []);

    return (
        <div className="logoContainer">
            {/* <form onSubmit={clickHandler}>
                <input type="text" onChange={changeHandler}/>
                <input type="button" value="Post" onClick={clickHandler} />
            </form>
            <ul>
                {contents.map(c => <li>{c}</li>)}
            </ul> */}

            {/* <div id="logoBR">
            <img src={LogoBR} class="img-thumbnail" alt="LogoBR"></img>
            </div> */}
            <div style={{ position: "absolute" }}>
                <div className={"animate"} style={logoStyle}></div>
            </div>
            <h3 style={{ position: "absolute", left: 250, top: 30, width: 200, color:"#141414" }}>Room_it!</h3>
        </div>
    );
}

