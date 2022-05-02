import { gql } from "apollo-server";
import { postResolver } from "./post/resolvers";
import { postTypeDefes } from "./post/typedefs";
import { userResolver } from "./user/resolvers";
import { userTypeDefes } from "./user/typedefs";

const rootTypeDefes = gql`
type Query {
            hi : String
        }
`;

const rootResorvers = {
    Query : {
        hi : () => "Hellow"
    }
}

export const typeDefs = [rootTypeDefes, userTypeDefes, postTypeDefes];
export const resolvers = [rootResorvers, userResolver, postResolver];