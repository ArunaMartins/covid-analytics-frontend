
const proxy = [
	{
		context: "/cov",
		target: "http://localhost:8088/covid-web-api/covid",
		pathRewrite: { "^/cov": "" },
	}
];
module.exports = proxy;
