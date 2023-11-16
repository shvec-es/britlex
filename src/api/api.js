const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '117bcd5592950f9f701a11f5ab982de0';

export const getData = async query => {
  return await fetch(`${BASE_URL}?q=${query}&appid=${API_KEY}`)
    .then(response => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .catch(err => console.log(err));
};
