import { gql } from "apollo-server";

export const userTypeDefes = gql`
extend type Query {
            user: User!,
            users: [User]
        }
       type User {
            id : ID,
            userName : String!,
            password : String!
       } 
`;

