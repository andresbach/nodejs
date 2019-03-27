const axios = require("axios");

const getData = async _url => {
  try {
		let options = {
			url: _url,
			headers: {
		    'Content-Type': 'application/json',
				'X-API-Token': "HERE GOES THE TOKEN"
			}
		};
    const response = await axios.request(options);
    const data = response.data;
    // console.log(data);
		return data;
  } catch (error) {
    console.log(error);
  }
};
getData('HERE GOES THE ACTUAL PATH').then(console.log);

// console.log(resultado);
