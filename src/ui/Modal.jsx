import React from 'react'; //
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'; 
const Modal = props => {
  const {done, modalData} = props;
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={classes['backdrop']}>
          <main className={classes['modal']}>
            <h1 className={`${classes['modal__title']} ${classes[modalData.response]}`}>{modalData.response}</h1>
            <h4 className={classes['modal__p']}>
              The capital of 
              <strong className={classes['modal__country']}> {modalData.country} </strong>
              is 
              <strong className={classes['modal__answer']}> {modalData.capital} </strong>
            </h4>
            <button className={classes['modal__btn']} onClick={done} >Continue</button>
          </main>
        </div>,
        document.querySelector('.modal-gate')

      )}
    </React.Fragment>

  ) 
};
export default Modal; 