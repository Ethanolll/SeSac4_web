import {useState} from "react";
import "./Modal.scss"
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalContent from "./ModalContent/ModalContent";
// import ModalInfo from "./ModalInfo/ModalInfo";
// import ModalScore from "./ModalScore/ModalScore";
// import ModalReview from "./ModalReview/ModalReview";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const handleClickOpen= () => {
    setModal(!modal);
  }
  const closeModal = () => {
    setModal(false);
  }

  return (
    <div className='App'>
      <button onClick={handleClickOpen}>Open Modal</button>
      <div>
        {modal ?
        <div className='main'>
          <div className='modal'>
            <ModalHeader modal={modal} setModal={setModal} onClick={closeModal}/>
            <ModalContent/>
          <div>
        </div>
      </div>
    </div>:""}
  </div>
</div>
  );
}

export default Modal;