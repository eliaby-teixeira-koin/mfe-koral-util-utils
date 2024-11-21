export function setEnviroment() {
	const environments = {
		prod: "https://koral-api.koin.com.br",
		"dev-1": "https://dev-1-koral-api.koin.com.br",
		"pre-prd": "https://pre-prd-koral-api.koin.com.br",
		local: "https://dummyjson.com/auth",
	};

	const env = process.env.REACT_APP_ENVIRONMENT;

	return environments[env];
}
