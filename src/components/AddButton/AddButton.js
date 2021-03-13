import styles from './AddButton.css'

const AddButton = ({ onClick }) => {

  return (
    <a className="addButton"  onClick={onClick}>
      +
    </a>
  );
};

export default AddButton;
