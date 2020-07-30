import React, { useState, useEffect } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.png';

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    setData(fetchedData);
    setCountry(country);
  };
  useEffect(() => {
    async function fetchMyApi() {
      let res = await fetchData();
      setData(res);
    }
    fetchMyApi();
  }, []);
  return (
    <div className={styles.container}>
      <img src={coronaImage} className={styles.image} alt='COVID-19' />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
