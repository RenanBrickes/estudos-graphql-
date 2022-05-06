import { gql } from 'apollo-server-core';

export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!): User!
    users(input: ApiFiltersInput): [User!]!
  }

  extend type Mutation {
    createUser(data: InputUserCreate): Boolean
    editUser(userId: ID! data: inputUserEdit): Boolean
    deleteUser(userId: ID!): Boolean
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    indexRef: Int!
    createdAt: String!
    posts: [Post!]!
  }

  input InputUserCreate {
    firstName: String!
    lastName: String!
    userName: String!    
  }
  input inputUserEdit {
    firstName: String
    lastName: String
    userName: String
  }
`;