const axios = require("axios");

async function getData(_url) {
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

async function calling() {
	let result = await getData('HERE GOES THE ACTUAL PATH');
	console.log(result);
}

calling()
