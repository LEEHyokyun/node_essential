const bodyParser = require("body-parser");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
//const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

const PORT = 8000;
const server = express();

const typeDefs = `
    type Lang {
        id : Int,
        name : String!
    }
    type Query {
        getLangs(name: String) : [Lang]
    }
`;

const langs = [
  {
    id: 0,
    name: "How are you?",
  },
  {
    id: 1,
    name: "Ar you OK?",
  },
];

//원하는 data를 받기위한 변수
const resolvers = {
  Query: {
    getLangs: () => langs,
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

server.use(
  "/graphql",
  bodyParser.json(),
  graphqlHTTP({
    schema,
    resolvers,
    endpoint: "/graphql",
  })
);

server.use(
  "/graphiql",
  graphqlHTTP({
    schema,
    resolvers,
    graphiql: true,
  })
);

server.listen(PORT, () => console.log(`Server Running at ${PORT}`));
