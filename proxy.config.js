
const proxy = [
	{
		context: "/covidWeb",
		target: "https://teste-covid-web-api.herokuapp.com/covid-web-api",
		pathRewrite: { "^/covidWeb": "" },
	}
];
module.exports = proxy;
