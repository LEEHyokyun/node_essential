const bodyParser = require("body-parser");
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

const PORT = 8000;

const server = express();

const typeDefs = gql`
  type Lang {
    id: Int
    name: String!
  }
  type Query {
    getLangs(name: String): [Lang]
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

server.use(bodyParser.json());

server.use(
  "/graphql",
  gql({
    schema,
  })
);

server.use(
  "/graphiql",
  gql({
    //endpoint: "/graphiql",
    graphiql: true,
  })
);

server.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
