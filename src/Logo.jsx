import React, { useState, useEffect } from "react";
import LogoBR from './LogoBR.png'

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
            
            <div id="logoBR">
            <img src={LogoBR} class="img-thumbnail" alt="LogoBR"></img>
            </div>
        </div>
    );
}

