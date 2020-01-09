const { GraphQLServer } = require('graphql-yoga')

// 1
const typeDefs = `
  type Query {
    info: String! 
  }
`

// 2
const resolvers = {
  Query: {
    info: () => `Hackernews Clone의 API`
  }
}

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))
