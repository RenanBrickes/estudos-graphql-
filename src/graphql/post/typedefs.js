import { gql } from "apollo-server";

export const postTypeDefes = gql`
extend type Query {
            post: Post!,
            posts: [Post]
        }
       type Post {
            id : ID,
            title : String!,
       } 
`;

