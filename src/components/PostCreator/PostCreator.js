import { Modal, Button} from 'react-bootstrap';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import SimpleImage from '@editorjs/simple-image'; 
import List from '@editorjs/list';

function PostCreator(props) {
    
    const editor = new EditorJS({ 

        holder: 'editorjs', 
    
        tools: { 
            image: {
                class: SimpleImage,
                inlineToolbar: ['link'],
            },
            header: {
                class: Header,
                config: {
                    placeholder: 'Enter a header',
                    levels: [3, 4, 5, 6],
                    defaultLevel: 5,
                }
            },
            list: {
                class: List,
                inlineToolbar: true,
            },
        }, 
    })
      
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
            <div style={{borderWidth:"2px", borderColor:"black",borderStyle:"solid"}} id="editorjs"></div>        
        </Modal.Body>

        <Modal.Footer>
            <Button onClick={() => {console.log("Grab and send data")}}>Post</Button>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>

        </Modal>
    );
}

export default PostCreator;