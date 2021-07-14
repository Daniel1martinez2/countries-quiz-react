import classes from './Form.module.css'; 

const Form = props => {
  const {options, onSubmit} = props;
  const handleSubmit = (event) =>{
    event.preventDefault();
    onSubmit(); 
  }
  return (
    <form className={classes['form']} onSubmit={handleSubmit} >
      <label htmlFor="answer-select" className={classes['label']} >Choose a capital:</label>
      <select className={classes['select']} name="answers" id="answer-select">
          <option value="">--Please choose an option--</option>
          {
            options && 
            options.map(
              opt => {
                return (
                  <option 
                    key={(Math.random().toString())} 
                    value={opt.trim('')}
                  >
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
