import female from "../img/female.png"
import male from "../img/male.png"
import nonbinary from "../img/nonbinary.png"
import React, { useState, useEffect } from "react";


const getGenderLogo = (gender) => {
    if (gender == "Male"){
      return male;
    } else if (gender == "Female") {
      return female;
    }
    return nonbinary;
}

export default function GenderLogo(props) {  
  const { gender } = props;
  
    return (
      <img src={getGenderLogo(gender)} className="genderLogo" alt="LogoBR"></img>
    );
}

