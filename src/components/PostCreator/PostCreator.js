import { Modal, Button} from 'react-bootstrap';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import SimpleImage from '@editorjs/simple-image'; 
import List from '@editorjs/list';
import ReactQuill from 'react-quill'; // ES6


function PostCreator(props) {
    const { onSubmitClick } = props;

    console.log("Post creator rerendered");
    
    const editor = new EditorJS({ 

        holder: 'editorjs', 
        placeholder: 'Start writing something!',
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
            <ReactQuill 
                theme="snow"
                modules = {{
                    toolbar: [
                      [{ 'header': [1, 2, false] }],
                      ['bold', 'italic', 'underline','strike', 'blockquote'],
                      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                      ['link', 'image'],
                      ['clean']
                    ],
                  }}
                  />
            {/* <div style={{borderWidth:"2px", borderColor:"black",borderStyle:"solid"}} id="editorjs"></div>    */}
        </Modal.Body>

        <Modal.Footer>
            <Button onClick={
              // () => {
              //   console.log(1);
              //     editor.save()
              //     .then((savedData) => {
              //         console.log("AAA" + savedData);
              //     });
              // }
              onSubmitClick
            }
            >Post
            </Button>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>

        </Modal>
    );
}

export default PostCreator;