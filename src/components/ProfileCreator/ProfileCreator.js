import { Modal, Button} from 'react-bootstrap';

function ProfileCreator(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton={true}>
        <Modal.Title id="contained-modal-title-vcenter">
          Create a profile
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <h4>Name:</h4>
        <text name="" id="" cols="90" rows="10"></text>
        {/* <textarea name="" id="" cols="90" rows="10"></textarea> */}
        <h4>Name:</h4>
        <text name="" id="" cols="90" rows="10"></text>
        <h4>Description:</h4>
        <textarea name="" id="" cols="90" rows="10"></textarea>
        <h4>Name:</h4>
        <text name="" id="" cols="90" rows="10"></text>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => {console.log("Grab and send data")}}>Post</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  );
}

export default ProfileCreator;