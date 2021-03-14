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
        <input class="form-control" type="text" placeholder="Name"></input>
        {/* <textarea name="" id="" cols="90" rows="10"></textarea> */}
        <h4>Gender:</h4>
        <input type="radio" id="male" name="gender" value="male"></input>
        <label for="male">Male</label><br />
        <input type="radio" id="female" name="gender" value="female"></input>
        <label for="female">Female</label><br />
        <input type="radio" id="other" name="gender" value="other"></input>
        <label for="other">Other</label>
        <h4>Pets:</h4>
        <input type="radio" id="male" name="gender" value="male"></input>
        <label for="male">Yes</label><br />
        <input type="radio" id="female" name="gender" value="female"></input>
        <label for="female">No</label><br />
        <h4>Price:</h4>
        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
          <option selected>Price: </option>
          <option value="1">&#62; 500</option>
          <option value="2">500 ~ 750</option>
          <option value="3">751 ~ 1000</option>
          <option value="3">1001 ~ 1500</option>
        </select>
        <div class="form-group">
          <label for="exampleFormControlTextarea1"><h4>Description:</h4></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => { console.log("Grab and send data") }}>Post</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  );
}

export default ProfileCreator;