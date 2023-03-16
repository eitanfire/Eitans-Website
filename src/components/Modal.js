// import React, { useEffect } from 'react'
// import { CSSTransition } from 'react-transition-group' 
// import ReactDom from 'react-dom'

// const Modal = props => {
//     const closeOnEscapeKeyDown = e => {
//         if ((e.charCode || e.keyCode) === 27) {
//           props.onClose();
//         }
//       };
    
//       useEffect(() => {
//         document.body.addEventListener("keydown", closeOnEscapeKeyDown);
//         return function cleanup() {
//           document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
//         };
//       }, []);

//     return ReactDom.createPortal(
//         <CSSTransition
//         unmountOnExit
//         timeout={{ enter: 0, exit: 300 }}
//         >
//         <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
//             <div className="modal-content" onClick={e => e.stopPropagation()}>
//                 <div className="modal-header">
//                     <h4 className="modal-title">{props.title}</h4>
//                 </div>
//                 <div className="modal-body">{props.children}</div>
//                 <div classNmar="modal-footer">
//                     <button onClick={props.onClose} className="button">Close</button>
//                 </div>
//             </div>
//         </div>
//         </CSSTransition>,
//         document.getElementById('root')
//     );
// };

// export default Modal;