import React, {useState} from 'react';

import classes from './Form.module.css'; 

const Form = props => {
  const {options, setAnswer} = props;
  const [currentAnswer, setCurrentAnswer] = useState(''); 
  const handleSubmit = (event) =>{
    event.preventDefault();
    setAnswer(currentAnswer);  
  }; 
  const handleSelectAnswer = (event) => {
    setCurrentAnswer(event.target.value)
  }; 

  return (
    <form className={classes['form']} onSubmit={handleSubmit} >
      <label htmlFor="answer-select" className={classes['label']} >Choose a capital:</label>
      <select onChange={handleSelectAnswer} className={classes['select']} name="answers" id="answer-select" value={currentAnswer}>
          <option value="">--Please choose an option--</option>
          {
            options && 
            options.map(
              opt => {
                return (
                  <option key={(Math.random().toString())} value={opt.trim('')}>
                    {opt}
                  </option> 
                )
              }
            )
          }
      </select>
      <button className={classes['btn']} >CLICK</button>
    </form>
  ); 
}; 
export default Form; 
