import schema from './data/schema';
import { ApolloServer} from 'apollo-server';

const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 3001;
const server = new ApolloServer({schema});
server.listen({port:GRAPHQL_PORT}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
