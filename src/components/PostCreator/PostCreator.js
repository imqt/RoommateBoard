import { Modal, Button, ButtonGroup } from 'react-bootstrap';
import ReactQuill from 'react-quill'; // ES6
import { useState } from 'react';


function PostCreator(props) {
  const { onSubmitClick } = props;

    const [value, setValue] = useState('');
    const [colorSelected, setColorSelected] = useState('white');
    const [backgroundSelected, setBackgroundSelected] = useState('paper');

    const getHashTagList = () => {
      const tags = document.getElementById("hashTags").value.split("#");
      return [...tags.map(tag => tag.trim().toLowerCase()), ""];
    };

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton={true}>
            <Modal.Title id="contained-modal-title-vcenter">
            Create a Bulletin
            </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            <p>Pick a Color</p>
            <ButtonGroup aria-label="Basic example">
                <Button variant="light" onClick={() => setColorSelected("white")}>white</Button>
                <Button variant="secondary" onClick={() => setColorSelected("grey")}>grey</Button>
                <Button variant="primary" onClick={() => setColorSelected("blue")}>blue</Button>
                <Button variant="success" onClick={() => setColorSelected("green")}>green</Button>
                <Button variant="warning" onClick={() => setColorSelected("yellow")}>yellow</Button>
                <Button variant="danger" onClick={() => setColorSelected("red")}>red</Button>
            </ButtonGroup>

            <p style={{marginTop: "20px"}}>Pick a Background</p>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={() => setBackgroundSelected("paper")}>plain ol' paper</Button>
                <Button variant="light" onClick={() => setBackgroundSelected("sticky")}>sticky note</Button>
                <Button variant="primary" onClick={() => setBackgroundSelected("scrap")}>scrap paper</Button>
            </ButtonGroup>

            <p style={{marginTop: "20px"}}># Tag</p>
            <textarea id="hashTags" rows="4" cols="50"></textarea>


            <p style={{marginTop: "20px"}}>Bulletin Content</p>
            <ReactQuill 
                // style={{background: "red"}}
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
            <Button onClick={() => {onSubmitClick(value, colorSelected, backgroundSelected, getHashTagList())}}>Post</Button>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>

        </Modal>
    );
}

export default PostCreator;