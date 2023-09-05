
export const carsOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f6cc5371ffmsh0ba8f1ae3ae5468p1d67b6jsn0eee643cc9cfg',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    };

    export const fetchData = async (url, options) =>{
      const response = await fetch( url, options);
      const data = await response.json();
  
      return data;
  }