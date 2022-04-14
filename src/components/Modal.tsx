const Modal =({ message, isOpen, onClose, children })=> {
    if (!isOpen) return null
    return ReactDOM.createPortal(    
      <div className="modal">
        <span className="message">{message}</span>
        <button onClick={onClose}>Close</button>
      </div>,
      domNode)
  }