import 'dotenv/config';

const env = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

let config = {},
	appInfo = {
		name: 'bob-api',
		description: 'Test api for bob user data',
		keywords: 'bob, baggage, travel',
		url: process.env.APP_URL,
		author: 'Bomdi Munang <dzedock@yahoo.com> (https://bomdisoft.com)',
	},
	expressSessionOptions = {
		secret: 'supersecret(!)',
		resave: false,
		saveUninitialized: false
	},
	nosqlOptionsBase = {
		useNewUrlParser: true,
		useCreateIndex: true,
		connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
		socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
		reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
		reconnectInterval: 500, // Reconnect every 500ms
	},
	graphqlRoute = '/api';

config.development = {
	envName : 'development',
	port: process.env.PORT,
	appInfo,
	expressSessionOptions,
	graphqlRoute,
	database: {
		nosql: {
			connectionString: process.env.DB_CONNECTION_STRING,
			options: {
				...nosqlOptionsBase,
				autoIndex: true, // Build indexes
				poolSize: 10, // Maintain up to 10 socket connections
				bufferMaxEntries: 5,  // If not connected, return errors immediately rather than waiting for reconnect
			}
		},
		sql: {}
	},
};

config.stage = {
	envName : 'stage',
	port: process.env.PORT,
	appInfo,
	expressSessionOptions,
	graphqlRoute,
	database: {
		nosql: {
			connectionString: process.env.DB_CONNECTION_STRING,
			options: {
				...nosqlOptionsBase,
				autoIndex: false,
				poolSize: 10,
				bufferMaxEntries: 5,
			}
		},
		sql: {}
	},
};

config.production = {
	envName : 'production',
	port: process.env.PORT,
	appInfo,
	expressSessionOptions,
	graphqlRoute,
	database: {
		nosql: {
			connectionString: process.env.DB_CONNECTION_STRING,
			options: {
				...nosqlOptionsBase,
				autoIndex: false,
				poolSize: 20,
				bufferMaxEntries: 10,
			}
		},
		sql: {}
	},
};

module.exports = typeof(config[env]) === 'object' ? config[env] : config.development;
