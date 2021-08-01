const bodyParser = require("body-parser");
const express = require("express");
const bodyParser = requrie(bodyParser);
const { graphExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

const PORT = 8000;
const server = expresss();

const typeDef = `
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
