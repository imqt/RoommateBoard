import styles from './ProfileButton.css'

const ProfileButton = ({ onClick }) => {

  return (
    <a className="profileButton"  onClick={onClick}>
      profile
    </a>
  );
};

export default ProfileButton;
