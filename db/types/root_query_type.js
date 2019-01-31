const graphql = require('graphql');
const knex = require('../knex');
const KnightType = require("./knight_type");
const DragonType = require("./dragon_type");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        knights: {
            type: new GraphQLList(KnightType),
            resolve() {
                return knex('knights').then(results => results);
            }
        },
        knight: {
            type: KnightType,
            args: { id: { type: GraphQLInt } },
            resolve(parentValue, { id }) {
                return knex('knights').where('id', id).then(results => results[0]);
            }
        },
        dragons: {
            type: new GraphQLList(DragonType),
            resolve() {
                return knex('dragons').then(results => results);
            }
        },
        dragon: {
            type: DragonType,
            args: { id: { type: GraphQLInt } },
            resolve(parentValue, { id }) {
                return knex('dragons').where('id', id).then(results => results[0]);
            }
        }
    })
});
module.exports = RootQuery;
