let Twitter = require('twitter-lite');
let {log} = console;

const user = new Twitter({
  consumer_key: "",
  consumer_secret: ""
});

async function getStatus() {
	const response = await user.getBearerToken();
	const app = new Twitter({
	  bearer_token: response.access_token
	});

	return app.get("search/tweets",
		{
			'q' : '"Diced Pineapples"'
		}
	);
}



getStatus()
	.then((res) => {
		log('response', res)
	})
	.catch((err) => {
		log('error', err)
	});

