import { ApolloServer, gql } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema';
import fetch from "node-fetch";
import { context } from './graphql/context';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context
});

server.listen(4003).then(({ url }) => {
    console.log(`Appolo nessa porta ${url}`)
});