import styles from './ProfileCreator.css';
import { Modal, Button } from 'react-bootstrap';
import ProfileImg from '../../components/img/profileImage.jpeg';

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
          <div class="image-upload">
            <label for="file-input">
              <img id="proPic" src={ProfileImg} class="card-img-top rounded-circle" alt="proPic" />Create a profile
            </label>
            <input id="file-input" type="file" onChange={previewFile}></input>
          </div>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div class="singleLineForm">
          <h4>Name:</h4>
          <input class="form-control" type="text" placeholder="Name"></input>
        </div>
        {/* <textarea name="" id="" cols="90" rows="10"></textarea> */}
        <div class="singleLineForm">
          <h4>Gender:</h4>
          <input type="radio" id="male" name="gender" value="male"></input>
          <label for="male">Male</label><br />
          <input type="radio" id="female" name="gender" value="female"></input>
          <label for="female">Female</label><br />
          <input type="radio" id="other" name="gender" value="other"></input>
          <label for="other">Other</label>
        </div>
        <div class="singleLineForm">
          <h4>Pets:</h4>
          <input type="radio" id="male" name="gender" value="male"></input>
          <label for="male">Yes</label><br />
          <input type="radio" id="female" name="gender" value="female"></input>
          <label for="female">No</label><br />
        </div>
        <div class="singleLineForm">
          <label for="exampleDataList" class="form-label"><h4>Location: </h4></label>
          <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="City" />
          <datalist id="datalistOptions">
            <option value="Abbotsford" />
            <option value="Burnaby" />
            <option value="Coquitlam" />
            <option value="Delta" />
            <option value="Lanley" />
            <option value="New Westminister" />
            <option value="North Vancouver" />
            <option value="Richmond" />
            <option value="Surrey" />
            <option value="Vancouver" />
            <option value="Victoria" />
            <option value="White Rock" />
            <option value="Pitt Meadows" />
          </datalist>
        </div>
        <div class="singleLineForm">
          <h4>Price:</h4>
          <select class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option selected>Price: </option>
            <option value="1">&#62; 500</option>
            <option value="2">500 ~ 750</option>
            <option value="3">751 ~ 1000</option>
            <option value="3">1001 ~ 1500</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1"><h4>Description:</h4></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => { console.log("Grab and send data") }}>Post</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal >
  );
  //preview replace image
  function previewFile() {
    var fileImg = document.getElementById("proPic");
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function () {
      fileImg.src = reader.result;
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }
}

export default ProfileCreator;