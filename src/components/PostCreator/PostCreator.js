import { Modal, Button, ButtonGroup } from 'react-bootstrap';
import ReactQuill from 'react-quill'; // ES6
import { useState } from 'react';


function PostCreator(props) {
    const { onSubmitClick } = props;
    const initialState = {
        name: "",
        gender: "female",
        pets: "0",
        price: "500 ~ 750"
      };

    const [{ name, gender, pets, price }, setState] = useState(initialState);
    const [value, setValue] = useState('');
    const [colorSelected, setColorSelected] = useState('white');
    const [backgroundSelected, setBackgroundSelected] = useState('paper');

    const getHashTagList = () => {
      const tags = document.getElementById("hashTags").value.split("#");
      return [...tags.map(tag => tag.trim().toLowerCase()), ""];
    };


    const clearState = () => {
        setState({ ...initialState });
        setValue();
      };
    
      const onChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
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
            <form>
                <label>
                    Name:
                    {/* <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name"/> */}
                    <input type="text" value={name} name="name" onChange={onChange} placeholder="Name"/>
                </label>
                <label>
                    Gender:
                    <select name="gender" value={gender} onChange={onChange}>
                        <option selected value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <label>
                    Pets:
                    <select name="pets" value={pets} onChange={onChange}>
                        <option value="1">Yes</option>
                        <option selected value="0">No</option>
                    </select>
                </label>
                <label>
                    Price Range:
                    <select name="price" value={price} onChange={onChange}>
                    <option selected value="1">&#62; 500</option>
                    <option value="2">500 ~ 750</option>
                    <option value="3">751 ~ 1000</option>
                    <option value="3">1001 ~ 1500</option>
                    </select>
                </label>
            </form>
            <h5>What else should we know about :)?</h5>
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
            <textarea id="hashTags" rows="1" cols="106"></textarea>

            <p style={{marginTop: "20px"}}>Bulletin Content</p>
            <ReactQuill 
                name="value"
                theme="snow"
                placeholder="Tell us more about yourself"
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
            <Button onClick={() => {
                clearState(); 
                onSubmitClick(name, gender, pets, price, value, colorSelected, backgroundSelected, getHashTagList())}}>Post</Button>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>

        </Modal>
    );
}

export default PostCreator;