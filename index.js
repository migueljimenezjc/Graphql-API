const { GraphQLServer } = require("graphql-yoga");
const typeDefs = require("./graphql/types.js");
const resolvers = require("./graphql/resolvers.js");

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context:{

    }
});

server.start(() => console.log("Server is running on localhost:4000"));