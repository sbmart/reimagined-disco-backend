const graphql = require('graphql');
const knex = require('../knex');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList
} = graphql;

const DragonType = new GraphQLObjectType({
    name: 'Dragon',
    fields: () => {
        const KnightType = require("./knight_type");
        return {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        species: { type: GraphQLString },
        breed: { type: GraphQLString },
        age: { type: GraphQLFloat },
        owners: {
            type: new GraphQLList(KnightType),
            resolve(parentValue, args) {
                return knex('dragon_owners').where('dragon_id', parentValue.id)
                    .join('knights', 'dragon_owners.owner_id', '=', 'knights.id')
                    .then(results => results);
            }
        },
        followers: {
            type: new GraphQLList(KnightType),
            resolve(parentValue, args) {
                return knex('dragon_followers').where('dragon_id', parentValue.id)
                    .join('knights', 'dragon_followers.follower_id', '=', 'knights.id');
            }
        }
     };
    }
});
module.exports = DragonType;
