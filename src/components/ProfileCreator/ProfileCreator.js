import { Modal, Button } from 'react-bootstrap';

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
        <input type="text" name="" id="" ></input>
        {/* <textarea name="" id="" cols="90" rows="10"></textarea> */}
        <h4>Gender:</h4>
        <input type="radio" id="male" name="gender" value="male"></input>
        <label for="male">Male</label><br />
        <input type="radio" id="female" name="gender" value="female"></input>
        <label for="female">Female</label><br />
        <input type="radio" id="other" name="gender" value="other"></input>
        <label for="other">Other</label>
        <h4>Description:</h4>
        <textarea name="" id="" cols="70" rows="3"></textarea>
        <h4>Name:</h4>
        <input type="text" name="" id="" ></input>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => { console.log("Grab and send data") }}>Post</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  );
}

export default ProfileCreator;