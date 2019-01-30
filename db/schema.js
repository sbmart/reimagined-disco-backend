const graphql = require('graphql');
const knex = require('./knex');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList
} = graphql;

const KnightType = new GraphQLObjectType({
    name: 'Knight',
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      friends: {
        type: new GraphQLList(KnightType),
        resolve(parentValue, args) {
          return knex('knight_friends').where('knight_one', parentValue.id).orWhere('knight_two', parentValue.id)
          .join('knights', function() {
            this.on('knight_friends.knight_one', '=', 'knights.id').orOn('knight_friends.knight_two', '=', 'knights.id');
          }).then(results => {
            return results.filter(knight => {
              return knight.id !== parentValue.id && knight.status === 'active';
            });
          });
        }
      },
      dragons_owned: {
          type: new GraphQLList(DragonType),
          resolve(parentValue, args) {
              return knex('dragon_owners').where('owner_id', parentValue.id)
              .join('dragons', 'dragon_owners.dragon_id', '=', 'dragons.id')
              .then(results => results);
          }
      },
      dragons_followed: {
          type: new GraphQLList(DragonType),
          resolve(parentValue, args) {
              return knex('dragon_followers').where('follower_id', parentValue.id)
              .join('dragons', 'dragon_followers.dragon_id', '=', 'dragons.id')
              .then(results => results);
          }
      }

    })
  });

  const DragonType = new GraphQLObjectType({
      name: 'Dragon',
      fields: () => ({
          id: { type: GraphQLInt },
          name: { type: GraphQLString }
      })
  })

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
        args: { id: { type: GraphQLInt} },
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
          args: { id: { type: GraphQLInt} },
          resolve(parentValue, { id }) {
              return knex('dragons').where('id', id).then(results => results[0])
          }
      }
    })
  });

module.exports = new GraphQLSchema({
    query: RootQuery
  });
