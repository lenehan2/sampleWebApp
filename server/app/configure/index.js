'use strict';
module.exports = function (app) {

    app.setValue = app.set.bind(app);
    app.getValue = function (path) {
        return app.get(path);
    };

    require('./app-variables')(app);
    require('./static-middleware')(app);
    require('./parsing-middleware')(app);

    // Logging middleware, set as application
    // variable inside of server/app/configure/app-variables.js
    if (process.env.NODE_ENV !== 'testing') {
        app.use(app.getValue('log'));
    }
};
