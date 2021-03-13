import './App.css';
import AddButton from './components/AddButton/AddButton';
import { useState } from 'react';
import PostCreator from './components/PostCreator/PostCreator'

function App() {

  const [modalShow, setModalShow] = useState(false);


  return (
    <div className="App">

      <AddButton onClick={() => setModalShow(true)}></AddButton>
     
      <PostCreator
        show={modalShow}
        onHide={() => setModalShow(false)}
        backdrop="static"
        keyboard={false}
      />

    </div>
  );
}

export default App;
