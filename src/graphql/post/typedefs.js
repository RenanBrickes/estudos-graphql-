import { gql } from "apollo-server";

export const postTypeDefes = gql`
extend type Query {
            post(id: ID): Post!,
            posts: [Post]
        }
       type Post {
            id : ID,
            title : String!,
            body : String!,
            indexRef : Int!,
            createdAt : String!
       } 
`;
