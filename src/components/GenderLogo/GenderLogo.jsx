import female from "../img/female.png"
import male from "../img/male.png"
import nonbinary from "../img/nonbinary.png"

const getGenderLogo = (gender) => {
    if (gender === "male"){
      return male;
    } else if (gender === "female") {
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

