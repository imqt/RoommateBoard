import { Modal, Button} from 'react-bootstrap';
import ReactQuill from 'react-quill'; // ES6
import { useState } from 'react';
import ProfileImg from '../../components/img/profileImage.jpeg';


function PostCreator(props) {
    const initialState = {
        name: "",
        gender: "female",
        pets: "0",
        price: "500 ~ 750",
        location: "Vancouver"
      };

    const [{ name, gender, pets, price, location }, setState] = useState(initialState);
    const [value, setValue] = useState('');


    const clearState = () => {
        setState({ ...initialState });
        setValue('');
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
                Create a Post

        {/* <div class="image-upload">
            <label for="file-input">
              <img id="proPic" src={ProfileImg} class="card-img-top rounded-circle" alt="proPic" />Create a profile
            </label>
            <input id="file-input" type="file" onChange={previewFile}></input>
          </div> */}
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
                    Location:
                    <select name="location" value={location} onChange={onChange}>
                    <option value="Abbotsford">Abbotsford</option>
                    <option value="Burnaby">Burnaby</option>
                    <option value="Coquitlam">Coquitlam</option>
                    <option value="Delta">Delta</option>
                    <option value="Lanley">Lanley</option>
                    <option value="New Westminister">New Westminister</option>
                    <option value="North Vancouver">North Vancouver</option>
                    <option value="Richmond">Richmond</option>
                    <option value="Surrey">Surrey</option>
                    <option value="Vancouver">Vancouver</option>
                    <option value="Victoria">Victoria</option>
                    <option value="White Rock">White Rock</option>
                    <option value="Pitt Meadows">Pitt Meadows</option>
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
                onSubmitClick(name, gender, pets, price, location, value)}}>Post</Button>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>

        </Modal>
    );
    // function previewFile() {
    //     var fileImg = document.getElementById("proPic");
    //     var file = document.querySelector("input[type=file]").files[0];
    //     var reader = new FileReader();
    
    //     reader.addEventListener("load", function () {
    //       fileImg.src = reader.result;
    //     }, false);
    
    //     if (file) {
    //       reader.readAsDataURL(file);
    //     }
    //   }
}

export default PostCreator;