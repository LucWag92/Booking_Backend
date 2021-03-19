const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

const gqlSchema = require('./graphql/schema/index');
const gqlResolver = require('./graphql/resolver/index');
const isAuth = require('./middleware/is-auth');
const app = express();

// Middleware Funktion which handles the requests etc
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.use(isAuth);
app.use(
  '/graphql',
  graphqlHTTP({
    schema: gqlSchema,
    rootValue: gqlResolver,
    graphiql: true,
  })
);

const port = process.env.PORT || 3000;

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clusterwebapp.d2ykm.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
