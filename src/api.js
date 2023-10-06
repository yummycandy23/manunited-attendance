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
    'X-RapidAPI-Key': '64946c5f2dmsh748e5c4b627803ap1886a4jsn0338531dadc3',
    'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}