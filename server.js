const express = require('express')(),
    { port, appInfo: { name }} = require('./credentials'),
    api = require('./expressSetup')(express);
    
api.listen(port, () => console.log(`Serving ${ name }'s API on port ${ port }`));
