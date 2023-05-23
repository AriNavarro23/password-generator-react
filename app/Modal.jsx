import "./Modal.css";

const Modal = (props) => {
  return (
    <div>
      <div onClick={props.onClose} className="backdrop"></div>
      <div className="modal">
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <button onClick={props.onClose}>Okay</button>
      </div>
    </div>
  );
}

export default Modal;
