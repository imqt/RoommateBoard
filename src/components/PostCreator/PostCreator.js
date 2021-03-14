import { Modal, Button} from 'react-bootstrap';
import ReactQuill from 'react-quill'; // ES6
import { useState } from 'react';


function PostCreator(props) {

    const [value, setValue] = useState('');
    const { onSubmitClick } = props;

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
            <ReactQuill 
                theme="snow"
                modules = {{
                    toolbar: [
                        [{ 'size': ['small', false, 'large', 'huge'] }],
                        [{ 'font': [] }],
                        ['bold', 'italic', 'underline', 'code-block'],
                        [{'list': 'ordered'}, {'list': 'bullet'}],
                        ['link', 'image'],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'align': [] }],
                    ],
                }}
                value={value}
                onChange={setValue}
                  />
        </Modal.Body>

        <Modal.Footer>
            <Button onClick={() => {onSubmitClick(value)}}>Post</Button>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>

        </Modal>
    );
}

export default PostCreator;