import React, {useEffect, useState} from 'react'; 
import useFetchQuestion from './hooks/fetch-question';
import Country from './components/Country';
import Form from './components/Form';
import Modal from './ui/Modal'; 

import './App.css';


function App() {
  const {countriesData, fetchCountries} = useFetchQuestion();
  const [isActive, setIsActive] = useState(false);
  const [answer, setAnswer] = useState(''); 
  const setFinalAnswer = (ans) => {
    setIsActive(true); 
    setAnswer(ans); 
  }; 
  const modalData = {
    country: countriesData?.answer?.name,
    capital: countriesData?.answer?.capital,
    response: answer === countriesData?.answer?.capital ? 'correct' : 'incorrect'
  }
  const handleFinish = () => {
    setIsActive(false);
    fetchCountries();  
  }; 
  useEffect(()=> {
    fetchCountries(); 
  },[fetchCountries]); 
  return (
    <div className="App">
      {isActive && <Modal answer={answer} done={handleFinish} modalData={modalData} />}
      <Country country={countriesData} />
      <Form setAnswer={setFinalAnswer} onSubmit={{fetchCountries,setIsActive}} options={countriesData.options && countriesData.options}/>
    </div>
  );
}

export default App;
