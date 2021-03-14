import { Modal, Button} from 'react-bootstrap';
import ReactQuill from 'react-quill'; // ES6
import { useState } from 'react';


function PostCreator(props) {
    const initialState = {
        name: "",
        gender: "female",
        pets: "0",
        price: "500 ~ 750"
      };

    const [{ name, gender, pets, price }, setState] = useState(initialState);
    const [value, setValue] = useState('');


    const clearState = () => {
        setState({ ...initialState });
        setValue();
      };
    
      const onChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
      };
    

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
                onSubmitClick(name, gender, pets, price, value)}}>Post</Button>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>

        </Modal>
    );
}

export default PostCreator;