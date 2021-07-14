import {useState, useCallback} from 'react';

const useFetchQuestion = () => {
  const [countriesData, setCountriesData] = useState({}); 
  const fetchCountries = useCallback(async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await response.json();
    const currentCountries = Array.from({length:4}).map(w => {
      const cap = data[Math.round(Math.random()*data.length-1)]; 
      return cap !== '' ? cap : data[Math.round(Math.random()*data.length-1)]; 
    });
    const answer = currentCountries[Math.round(Math.random()*3)]; 

    setCountriesData({
      options: currentCountries.map(c =>{
        return c.capital !== '' ? c.capital : '***Not capital sorry***'; 
      }),
      answer
    });
    
  },[]);  
 
  return {
    countriesData,
    fetchCountries
  }
}; 
export default useFetchQuestion;