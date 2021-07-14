import classes from './Country.module.css'; 

const Country = props => {
  const {country} = props;
  console.log(country);
  return (
    <main className={classes['country']}>
      <h1 className={classes['country__title']}>{country.answer && country.answer.name}</h1>
      <img className={classes['country__img']} src={country.answer && country.answer.flag} alt="" />
    </main>
  )
}; 
export default Country;