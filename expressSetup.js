module.exports = server => {
    
    const graphqlHTTP = require('express-graphql'),
        schema = require('./source/gql/schema'),
        mongoose = require('mongoose'),
        path  = require('path'),
        expressSession = require('express-session'),
        bodyParser = require('body-parser'),
        expressValidator = require('express-validator'),
        helmet  = require('helmet'),
        logger = require('morgan'),
        glob = require('glob'),
        cors = require('cors'),
        { 
            database: { nosql: { connectionString, options }}, 
            expressSessionOptions, graphqlRoute, envName, 
            appInfo: { url }
        } = require('./credentials'),
        routes = glob.sync(path.normalize(`${__dirname}/source/routes/*.js`));
        
    mongoose.connect(connectionString, options, 
        err => err ? console.error(err) : console.log('Connected to database!'));

    server.use(helmet()); // Some header security
    server.use(logger('dev'));
    server.use(cors({ origin: url }));
    server.use(graphqlRoute, graphqlHTTP({
        schema,
        graphiql: true
    }));

    server.use(bodyParser.json());
    server.use(expressValidator());
    server.use(expressSession(expressSessionOptions));

    routes.forEach(route => require(route)(server)); // Add all routes to scope

    // 404 handler
    server.use((req, res, next) => res.json({
        status: '404 - Not Found',
        message: 'Unknown endpoint',
    }));

    // 500 handler
    envName === 'development' ? 
        server.use((err, req, res, next) => {
            console.error(err.stack);
            handleErrorResponse(res);
        })
        :
        server.use((err, req, res, next) => handleErrorResponse(res));

    const handleErrorResponse = response => response.json({
        status: '500 - Internal error',
        message: 'The server is not accepting requests at the moment, please try again later!',
    });

  return server;
};
