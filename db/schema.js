const { RootQuery } = require("./KnightType");

const graphql = require('graphql');
const knex = require('./knex');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLFloat,
  GraphQLList
} = graphql;

module.exports = new GraphQLSchema({
    query: RootQuery
  });
