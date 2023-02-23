const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const {expressjwt} = require('express-jwt')
const app = express();
const PORT = process.env.PORT || 3001;
app.use(expressjwt({
    algorithms: ['HS256'],
    secret: 'secret000',
    credentialsRequired: true,
}).unless({
    path: ['/api',] //With this address, other URLs need to be verified  change
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);
// catch 404 and forward to error handler
app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        res.status(401).send("invalid token...");
    } else {
        next();
    }
});
db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});
