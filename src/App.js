import React, {useEffect} from 'react'; 
import useFetchQuestion from './hooks/fetch-question';
import Country from './components/Country';
import Form from './components/Form';

import './App.css';

function App() {
  const {countriesData, fetchCountries} = useFetchQuestion();
  useEffect(()=> {
    fetchCountries(); 
  },[fetchCountries]); 
  
  return (
    <div className="App">
      <Country country={countriesData} />
      <Form onSubmit={fetchCountries} options={countriesData.options && countriesData.options}/>
    </div>
  );
}

export default App;
