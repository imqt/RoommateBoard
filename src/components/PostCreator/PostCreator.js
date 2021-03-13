import { Modal, Button} from 'react-bootstrap';

function PostCreator(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton={true}>
        <Modal.Title id="contained-modal-title-vcenter">
          Create a post
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <h4>Title:</h4>
        <textarea name="" id="" cols="90" rows="10"></textarea>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => {console.log("Grab and send data")}}>Post</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  );
}

export default PostCreator;