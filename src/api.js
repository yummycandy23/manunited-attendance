import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://football-web-pages1.p.rapidapi.com/attendances.json',
  params: {
    comp: '1',
    team: '13',
    sort: 'average',
    type: 'home'
  },
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}