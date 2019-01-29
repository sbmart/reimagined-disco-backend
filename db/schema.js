const graphql = require('graphql');
const knex = require('./knex');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList
} = graphql;

const KnightType = new GraphQLObjectType()

const RootQuery = new GraphQLObjectType()

module.exports = new GraphQLSchema({
    query: RootQuery
  });
