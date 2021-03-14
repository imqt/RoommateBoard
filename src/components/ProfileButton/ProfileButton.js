import styles from './ProfileButton.css';
import ProfileImg from '../../components/img/profileImage.jpeg';

const ProfileButton = ({ onClick }) => {

  return (
    <a className="profileButton"  onClick={onClick}>
      <img id="profilePicture" src={ProfileImg} alt="Profile Pic"/> 
    </a>
  );
};

export default ProfileButton;
